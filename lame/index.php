<?php

//Lazy, but pretty
echo("<pre style=\"font-family: \"Comic Sans MS\", cursive, sans-serif; font-size: 30px;\">");

//Laziness to the max
passthru("cd " . __DIR__ . " && git pull");

echo("</pre>");
