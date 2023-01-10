var result = ['R', 'P', 'S'];
var random_result = result[Math.floor(Math.random() * result.length)];

var wins = 0;
var loses = 0;
var ties = 0;

var keep_playing = 1

while (keep_playing) {
    alert ("Let's Play Some Rock, Paper, Scissors!")

    var input = prompt("Choose your weapon!", "R, P, or S");


    if (input === random_result) {
        alert ("You chose " + input + 
            "\nThe computer chose " + random_result + 
            "\nYou Tied!");
            ties = ties+1;
    } else if (input=== "R" && random_result=== "S") {
        alert ("You Chose " + input + 
            "\nThe computer chose " + random_result + 
            "\nYou Win!");
            wins = wins+1;
    } else if (input=== "P" && random_result=== "R") {
        alert ("You Chose " + input + 
            "\nThe computer chose " + random_result + 
            "\nYou Win!");
            wins = wins+1;
    } else if (input=== "S" && random_result=== "P") {
        alert ("You Chose " + input + 
            "\nThe computer chose " + random_result + 
            "\nYou Win!");
            wins = wins+1;
    } else {
        alert ("You Chose " + input + 
            "\nThe computer chose " + random_result + 
            "\nBetter Luck Next Time! :P");
            loses = loses+1;
    };

    alert ("Wins: " + wins + 
    "\nLoses: " + loses +
    "\nDraws: " + ties);

    var keep_playing = confirm ("Would you Like to Play Again? ");

    if (keep_playing === true) {
        keep_playing = 1;
    } else {
        keep_playing = 0;
    }

}
