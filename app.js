var express = require('express');
var mongoose = require('mongoose')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mObj = require('./models/message')

var indexRouter = require('./routes/index');
// var Twilio = require('twilio');
var app = express();

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*'); //d'accéder à notre API depuis n'importe quelle origine, on changera plus tard;
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');//d'ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.) ;
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); //d'envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.).
    next();
});

mongoose.connect('mongodb://127.0.0.1:27017/telar',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/send', (req, res, next ) => {

  // Mise en place token de validation 
  // Mise en place du account SID
  // Ses 2 variables permettrons de s'authentifier à l'api
const accountSid = require('./bin/config').accountSid;
const authToken = require('./bin/config').authToken;
const twilionumber = require('./bin/config').twilionumber;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: req.body.message,
     from: twilionumber,
     to: req.body.numero
   })
  .then(message => {
    const mobject = new mObj ({
      toSender : message.from ,
      toReceiver : message.to ,
      toBody : message.body
    });
    // .catch(error => res.status(400).json({ error }));
    
    mobject.save()
    .then(() => res.status(201).render('index', { title: 'Message envoyé', message: 'Votre message a été envoyé, merci d\'avoir utiliser Simnet' }))
    .catch(error => res.status(400).render('index', { title: 'Erreur', message: error }));
  })
  .catch(error => res.status(400).render('index', { title: 'Erreur', message: error }));
});


app.use('/messagereq', (req, res, next) => {
  mObj.find()
    .then(mobject => res.status(200).json({mobject}))
    .catch(error => res.status(400).json({error}));
});

module.exports = app;