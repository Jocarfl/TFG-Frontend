<?php

require_once 'C:\Users\jcarr\OneDrive\Documentos\GitHub\TFG-React-Firebase\react-frontend\vendor\autoload.php';

use StaticKidz\BedcaAPI\BedcaClient;

header('Content-Type: text/html; charset=utf-8');

$client = new BedcaClient();

//echo $client->getFood(893, true);



echo "<pre>";
//var_dump($client->getFoodGroups());
var_dump($client->getFood(893));
echo "</pre>";