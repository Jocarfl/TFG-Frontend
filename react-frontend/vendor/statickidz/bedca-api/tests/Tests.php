<?php

require_once 'C:\Users\jcarr\Documents\GitHub\TFG-React-Firebase\react-frontend\vendor\autoload.php';

use StaticKidz\BedcaAPI\BedcaClient;

header('Content-Type: text/html; charset=utf-8');

$client = new BedcaClient();

$comida = new stdClass();




$jsonData = json_encode($client->getFood(683));
$a = json_decode($jsonData, true);
$myJSON = json_encode($a);

$fp = fopen('results1.json', 'w');
fwrite($fp, $myJSON);
fclose($fp);