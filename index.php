
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Twilio sms</title>
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
</head>
<body>
<h3 class="text-center text-blue-600 capitalize mt-4 text-2xl">Send Sms with Twilio</h3>
<div class="mx-auto w-1/3 h-full bg-gray-300 text-center py-3 border-blue-500">
    <form action="sendsms.php" method="post" class="">
        <label for="telephone" class="my-2">Numéro de télephone:</label><br/>
        <input type="text" class="bg-white text-black rounded-xl  my-2 border-blue-600 p-2 " placeholder="+229xxxxxxxx" name="telephone">
        <br/>
        <label for="message" class="my-2">Message:</label><br/>
        <textarea name="message" id="message" cols="20" rows="5" class="bg-white text-black rounded-xl  mt-2 border-blue-600 p-2 "></textarea><br/>
        <div class="my-2">
            <input type="reset" class="bg-red-800 rounded-3xl px-2 py-1 text-white text-center italic" value="Effacer">
            <input type="submit" class="bg-green-800 rounded-3xl px-2 py-1 text-white text-center italic" value="Envoyer">
        </div>
        
    </form>
</div>    
</body>
</html>
