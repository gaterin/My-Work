<?php
require'connect.php';

error_reporting(E_ALL);
ini_set('display_error', 1);



$sql = "SELECT * FROM scorelijst ORDER BY score DESC LIMIT 5";
$result = $conn->query($sql);
$plaats = 1;
echo '<div id="scoreboardRand">
            <span id="scoreboardSpan">Top 5 Highscores</span>
            <table id="scoreboard" style="position:relative;left:100px; top:50px">';

foreach ($result as $row) {
        
        echo "<tr>". "<td class='scorePlaats'>" . $plaats . "." . "</td>" .
        "<td class='scoreNaam'>" . $row["naam"] . "</td>" . 
        "<td class='scorePunten'>" . $row["score"] . "</td>" . "</tr>";
        $plaats++;
    }   
                
echo '</table></div>';

?>