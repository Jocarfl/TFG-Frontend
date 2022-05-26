<?php

require_once 'C:\Users\jcarr\Documents\GitHub\TFG-React-Firebase\react-frontend\vendor\autoload.php';

use StaticKidz\BedcaAPI\BedcaClient;

header('Content-Type: text/html; charset=utf-8');

$client = new BedcaClient();

$data = array();

//2713
for ($x = 680; $x <= 2713; $x++) {

$jsonData = json_encode($client->getFood($x));
$a = json_decode($jsonData, true);
$cont = 0;

if($a["food"]["f_id"] || $a["food"]["f_ori_name"] || $a["food"]["foodvalue"]){
  
  $comida = new stdClass();
  $comida->id =  $a["food"]["f_id"];//ID
  $comida->nombre = $a["food"]["f_ori_name"];//Nombre
  $comida->tipo = $a["food"]["namelevel1"];//Tipo
  $length = count($a["food"]["foodvalue"]);

}

  for($d = 0; $d<$length; $d++)
  {
    if($a["food"]["foodvalue"][$d]["c_id"] == 410)//Grasa Total
    {
      $comida->grasaT = $a["food"]["foodvalue"][$d]["best_location"];//Grasa Total
    }

    if($a["food"]["foodvalue"][$d]["c_id"] == 416)//Proteina Total
    {
      $comida->proteinaT = $a["food"]["foodvalue"][$d]["best_location"];//Proteina Total
    }

    if($a["food"]["foodvalue"][$d]["c_id"] == 409)//Energia Total
    {
      $comida->energiaT = $a["food"]["foodvalue"][$d]["best_location"];//Energía Total
    }
  }

array_push( $data, $comida );
}

$myJSON = json_encode($data);

$fp = fopen('ComidaBD.json', 'w');
fwrite($fp, $myJSON);
fclose($fp);
