<?php

 include './vendor/autoload.php';

 if (isset($_POST['telephone']) && isset($_POST['message'])) {
     //twilio params
     $sid = "xxxxxxxxx";
     $token = "xxxxxxxx";
     

     try {
        $number = 'xxxxxx';
        $client = new Twilio\Rest\Client($sid, $token);
        $message = $client->messages->create(
            $_POST['telephone'],array(
                'from' => $number,
                'body' => $_POST['message']

            )
        );
    
    } catch (Exception $e) {
        echo 'Exception reçue : ',  $e->getMessage(), "\n";
    }
     
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SMS twilio</title>
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
</head>
<body>
    <h2 class="text-center my-4 text-xl capitalize text-blue-800">Liste de messages</h2>
    <div class="container flex justify-center mx-auto">
    <div class="flex flex-col">
        <div class="w-full">
            <div class="border-b border-gray-400 shadow">
                <table>
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-2 text-xs text-gray-500">
                                From
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                                To
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                                Message
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody class="bg-white border-blue-400">
                                            
                        <?php
                            $messages = $client->messages
                                        ->read([], 20);
                                foreach ($messages as $record) {
                        ?>
                        <tr class="whitespace-nowrap">
                            <td class="px-6 py-4 text-sm text-gray-500">
                                <?php echo "{$record->from}" ?>
                            </td>
                            <td class="px-6 py-4">
                                 <div class="text-sm text-gray-900">
                                        <?php echo"{$record->to}"; ?>
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-500"><?php  echo"{$record->body}"; ?></div>
                            </td>
                           
                       </tr>
                       <?php    
                                }


                        }
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</body>
</html>