// global variables
var wins = 0;
var losses = 0;
var counter = 0;

// Links to audio element
var audioElementWin = document.createElement("audio");
audioElementWin.setAttribute("src", "assets/Fairy Dust Sound Effect.mp3");

var audioElementLose = document.createElement("audio");
audioElementLose.setAttribute("src", "assets/glass-breaking-sound-effect.mp3");

// Randomly generated number to meet
var targetNumber = Math.floor(Math.random() * 120) + 19;
$("#computerScore").text("Number to meet: " + targetNumber);


// each image gets a randomized value by targeting id
$("#crystal1").attr("value", Math.floor(Math.random() * 12) + 1);
$("#crystal2").attr("value", Math.floor(Math.random() * 12) + 1);
$("#crystal3").attr("value", Math.floor(Math.random() * 12) + 1);
$("#crystal4").attr("value", Math.floor(Math.random() * 12) + 1);


// function to reset the game
var resetGame = function(){

    targetNumber = Math.floor(Math.random() * 120) + 19;
    $("#computerScore").text("Number to meet: " + targetNumber);

    
    $("#crystal1").attr("value", Math.floor(Math.random() * 12) + 1);
    $("#crystal2").attr("value", Math.floor(Math.random() * 12) + 1);
    $("#crystal3").attr("value", Math.floor(Math.random() * 12) + 1);
    $("#crystal4").attr("value", Math.floor(Math.random() * 12) + 1);


    counter = 0;
    $("#crystalScore").text("Your collection: " + counter);

}


// code for capturing value of each crystal by targeting class 
$(".gem").on("click", function() {
    var crystalValue = $(this).attr("value");
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#crystalScore").text("Your collection: " + counter);
    score();
});



// function to capture the score
var score = function(){
    if (counter === targetNumber) {
        audioElementWin.play();
        alert("You win!");
        wins++;
        $("#wins").text("Wins: " + wins);
        resetGame();
  
      }
  
      else if (counter >= targetNumber) {
        audioElementLose.play();
        alert("You lose!! Please try again.");
        losses++;
        $("#losses").text("Losses: " + losses);
        resetGame();
      }

}


