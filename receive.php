<?php
    echo $_POST["input"];
    $myfile = fopen("phase.txt", "a") or die("Unable to open file!");
    fwrite($myfile, $_POST["input"]."\n");
    fclose($myfile);
?>