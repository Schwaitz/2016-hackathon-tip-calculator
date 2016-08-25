<?php

//Lazy, but pretty
echo("<pre>");

//Laziness to the max
passthru("cd " . __DIR__ . " && git pull");

echo("</pre>");
