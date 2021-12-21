function getmessage() {
    const liste = document.getElementById('liste');
    const myList = document.getElementById('myList');

    liste.style.display = 'block';

    var url = 'http://localhost:3000/messagereq';

    fetch(url)
        .then(function(response) {
         if(response.ok) {
            myList.innerHTML= '';
           response.json()
           .then(data => {
            for (const mess of data.mobject) {
              let listItem = document.createElement('li');
              listItem.appendChild(
                document.createElement('strong')
              ).textContent = `Message : ${mess.toBody}`;
              listItem.append(
                ` envoyé par ${
                  mess.toSender
                } au : `
              );
              listItem.appendChild(
                document.createElement('strong')
              ).textContent = `${mess.toReceiver}`;
              listItem.append(
                ` le : ${
                  mess.toWhen
                }`
              );
              myList.appendChild(listItem);
            }
          })
          .catch(console.error);
        }
      })
        .catch(function(error) {
        console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
      });
      
}