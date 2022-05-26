<?php

require_once 'C:\Users\jcarr\Documents\GitHub\TFG-React-Firebase\react-frontend\vendor\autoload.php';

use StaticKidz\BedcaAPI\BedcaClient;

header('Content-Type: text/html; charset=utf-8');

$client = new BedcaClient();

$comida = new stdClass();




$h = var_dump($client->getFood(2461));



$fp = fopen('results4.json', 'w');
fwrite($fp, serialize($client->getFood(2713)));
fclose($fp);


echo"<pre>";
//echo $client->getFoodGroups();
//var_dump($client->getFoodGroups());
//var_dump($client->getFood(2461)); 
//var_dump($client->getFoodsInGroup(3));
//json_encode($client->getFood(2461));
echo "</pre>";  ?>