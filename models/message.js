const mongoose = require('mongoose');


const messageSchema = mongoose.Schema({
    toSender : {type : String, require:true},
    toReceiver : {type : String, require:true},
    toBody : {type : String, require:true},
    toWhen: {type : Date, require:false, default: Date.now}
});

module.exports = mongoose.model('mObj', messageSchema);