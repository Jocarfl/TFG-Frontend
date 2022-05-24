<?php

require_once 'C:\Users\jcarr\OneDrive\Documentos\GitHub\TFG-React-Firebase\react-frontend\vendor\autoload.php';

use StaticKidz\BedcaAPI\BedcaClient;

header('Content-Type: text/html; charset=utf-8');

$client = new BedcaClient();

//echo $client->getFood(893, true);


$jsonData = json_encode($client->getFood(2461));

//echo $jsonData;


echo"<pre>";
//echo $client->getFoodGroups();
//var_dump($client->getFoodGroups());
var_dump($client->getFood(2461)); 
//var_dump($client->getFoodsInGroup(3));
//json_encode($client->getFood(2461));
echo "</pre>";