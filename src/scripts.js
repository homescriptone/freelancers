  // function sendData(receiver, message) {
  //   var XHR = new XMLHttpRequest();
  //   var oOutput = document.getElementById("output");

  //   // Liez l'objet FormData et l'élément form
  //   var FD = new FormData(form);

  //   // Définissez ce qui se passe si la soumission s'est opérée avec succès
  //   XHR.addEventListener("load", function(event) {
  //     alert(event.target.responseText);
  //   });

  //   // Definissez ce qui se passe en cas d'erreur
  //   XHR.addEventListener("error", function(event) {
  //     alert('Oups! Quelque chose s\'est mal passé.');
  //   });

  //   //ajout du sender 
  //   FD.append("sender", "+12626003380");
  //   FD.append("receiver", receiver);
  //   FD.append("message", message);

  //   // Configurez la requête
  //   XHR.open("POST", "http://localhost/smsphp/src/scripts.php", true);
  //   var myHeaders = new Headers({
  //     'Content-Type': 'text/form-data'
  // });
  //   XHR.onload = function(oEvent) {
  //     if (XHR.status == 200) {
  //       oOutput.innerHTML = "Envoyé !";
  //     } else {
  //       oOutput.innerHTML = "Erreur " + oReq.status + " lors de la tentative d’envoi du fichier.<br \/>";
  //     }
  //   };

  //   // Les données envoyées sont ce que l'utilisateur a mis dans le formulaire
  //   XHR.send(FD);
  // }

  // // Accédez à l'élément form …
  // var form = document.getElementById("myForm");

  // // … et prenez en charge l'événement submit.
  // form.addEventListener("submit", function (event) {
  //   event.preventDefault();
  //   sendData();
  // });

  function sendData(){
    const url = "./src/scripts.php";
    
    const myHeader = new Headers({
      'Content-Type' : 'application/form-data',
  });
  
    const init = {
      method : 'POST',
      //headers : myHeader,
     // body:"receiver=%2B"+receiver+"&sender=%2B12626003380&body="+message
  }
    fetch (url, init)
      .then( response => console.log(response))
      .catch(error => console.log(error));
  }

function  sendsms(){

    var toNumero = document.getElementById('numero').value;
    var toMessage = document.getElementById('message').value;
    var errorMsg = document.getElementById('formEmpty');

    const numero = encodeURI(toNumero);
    const message = encodeURI(toMessage);

    // const url = "https://api.twilio.com/2010-04-01/Accounts/AC69e42951444f746a718f11b995a2963b/Messages.json";
    // const auth = "AC69e42951444f746a718f11b995a2963b:65277a943f3a702932ecdf7f61944b20"

    // if (numero != "" && message != ""){
    //     const myHeader = new Headers({
    //         'Content-Type' : 'application/x-www-form-urlencoded',
    //         'Authorization': 'Basic ' + btoa(auth)
    //     });
    
    //     const init = {
    //         method : 'POST',
    //         headers : myHeader,
    //         mode : 'cors',
    //         body:"To=%2B"+numero+"&From=%2B12626003380&Body="+message
    //     }
    //     fetch(url, init)
    //     .then( response => console.log(response))
    //     .catch(error => console.log(error));
        sendData();
  //  }
    // else  errorMsg.innerHTML = "Le formulaire est vide";
}

//res.status(401).json({error})

console.log("erreur");