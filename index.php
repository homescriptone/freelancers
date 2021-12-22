
<!DOCTYPE html>
<html lang="fr">
<head>
    <!-- <meta charset="UTF-8"> -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="src/style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">

    <title>Send sms by here</title>
</head>
<body>


    <div class="header">
        <nav>
            <h1> Envoie de sms en utilisant Twilio </h1>
        </nav>
    </div>
    <div class="container cont">

    <form id="myForm" action="./src/scripts.php" method="post">
    <table>
    <tr>
      <td><label for="numero">Numero du receveur</label></td>
      <td><input type="text" name="numero" id="numero" placeholder="+22965656565"></td>
    </tr>
    <tr>
      <td> <label for="message">Message</label></td>
      <td> <textarea name="message" id="message" cols="27" rows="5"></textarea></td>
    </tr>
    <tr>
      <td><button type="button" >Liste des messages</button></td> 
      <td> <button type="submit" >Envoyer <i class="far fa-paper-plane"></button></td>
    </tr>
  </table>
  </form>
        <span id="formEmpty" style="background-color: red;" ></span>
        <span id="output" style="background-color: red;"></span>

        <form action="" method="post">
          <input type="submit" name="liste" id="liste" value="Liste des messages">
        </form>
        <?php

if (isset($_POST['liste'])){
  $list = $con->query('SELECT * FROM sms');
  while ($data = $list->fetch()){
     echo "<tr> 
     <td> " . $data['sender'] . " </td>
     <td> " . $data['reveiver'] . " </td>
     <td> " . $data['body'] . " </td>
          </tr>";
  }
}

?>
    </div>
<script src="./src/scripts.js"></script>
</body>
</html>