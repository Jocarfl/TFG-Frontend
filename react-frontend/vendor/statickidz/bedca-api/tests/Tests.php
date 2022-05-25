<?php

require_once 'C:\Users\jcarr\Documents\GitHub\TFG-React-Firebase\react-frontend\vendor\autoload.php';

use StaticKidz\BedcaAPI\BedcaClient;

header('Content-Type: text/html; charset=utf-8');

$client = new BedcaClient();

//echo $client->getFood(893, true);


$jsonData = json_encode($client->getFoodGroups());


echo $jsonData;

$fp = fopen('results1.json', 'w');
fwrite($fp, $jsonData);
fclose($fp);


echo"<pre>";
//echo $client->getFoodGroups();
//var_dump($client->getFoodGroups());
//var_dump($client->getFood(2461)); 
//var_dump($client->getFoodsInGroup(3));
//json_encode($client->getFood(2461));
echo "</pre>";