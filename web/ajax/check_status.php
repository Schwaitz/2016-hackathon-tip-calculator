<?php

$returnText = "";

exec("screen -list | grep -q 'one'", $output, $return);

if(!$return) {
    $returnText = $returnText . "online:";   
}
else {
    $returnText = $returnText . "offline:";
}

exec("screen -list | grep -q 'two'", $output, $return);

if(!$return) {
    $returnText = $returnText . "online:";   
}
else {
    $returnText = $returnText . "offline:";
}


exec("screen -list | grep -q 'three'", $output, $return);

if(!$return) {
    $returnText = $returnText . "online:";   
}
else {
    $returnText = $returnText . "offline:";
}


exec("screen -list | grep -q 'four'", $output, $return);

if(!$return) {
    $returnText = $returnText . "online:";   
}
else {
    $returnText = $returnText . "offline:";
}


exec("screen -list | grep -q 'canton'", $output, $return);

if(!$return) {
    $returnText = $returnText . "online";   
}
else {
    $returnText = $returnText . "offline";
}


echo "$returnText";


?>