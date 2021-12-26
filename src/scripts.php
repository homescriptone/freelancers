<?php
 
// Update the path below to your autoload.php, 
// see https://getcomposer.org/doc/01-basic-usage.md 
require_once '../vendor/autoload.php'; 

 /* Configurations */

$accountsid = "AC123.....";
$authtoken = "29d6b9f.......";
$twilio_numero = '4045550101';


# Arguments de la requete

$phone  = $_POST['numero'];
$msg    = $_POST['message'];
$message    = str_replace('\n', "\n", $msg);


$client = new Services_Twilio($accountsid, $authtoken);
try 
{
    $sender = $client->account->sms_messages->create(
        $twilio_numero, // From a valid Twilio number
        $phone, // Text this number
        $message
    );    
    if($sender->sid){
        include_once './src/con.php';

            $save = $con->prepare('INSERT INTO sms values ("", :sender, :receiver, :body)');
            $save->execute(array(
                'sender' => $twilio_numero,
                'receiver' => $_POST['numero'],
                'body' => $message
            ));
        echo 'Message enregistré';
        }
        else {
           echo "erreur test"; 
        } 

        header('location:../index.php');
    }

catch (Exception $ex)
{
    var_dump($ex);
}
//}



//
// }
echo "test";
?>