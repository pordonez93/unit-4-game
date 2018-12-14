$(document).ready(function() {
    // random number for each gem
        var gem1 = Math.floor(Math.random()*12 + 1);
        var gem2 = Math.floor(Math.random()*12 + 1);
        var gem3 = Math.floor(Math.random()*12 + 1);
        var gem4 = Math.floor(Math.random()*12 + 1);
    
    //random number generated
        var numberToGuess = Math.floor((Math.random()*100)+1);
    
    //intial values for wins/losses and total score
        var totalScore = 0,
            wins = 0,
            losses = 0;
    
    // reset gem values and the number to be guessed to start again
    function reset(){
        numberToGuess= Math.floor((Math.random()*100)+1);
        gem1 = Math.floor(Math.random()*12 + 1);
        gem2 = Math.floor(Math.random()*12 + 1);
        gem3 = Math.floor(Math.random()*12 + 1);
        gem4 = Math.floor(Math.random()*12 + 1);
        totalScore=0;
        $("#num-to-guess").text(numberToGuess);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#totalPoints").text(totalScore);
    }
    
    //adds points to wins/losses and calls reset to start over
    function gamelogic(){
        if (totalScore === numberToGuess){
            wins++;
            alert("You win!");
            console.log('wins:', wins, '||', 'losses: ', losses);
            $("#wins").text(wins);
            reset();
        }else if (totalScore > numberToGuess){
            losses++;
            console.log('wins:', wins, '||', 'losses: ', losses);
            alert("You lost!");
            $("#losses").text(losses);
            reset();
        }
    }
    
    //on click functions for gems
    $("#crystal1").on("click", function onClick(){
        totalScore= totalScore + gem1;
        $("#totalPoints").text(totalScore, numberToGuess);
        console.log('total score: ', totalScore,'||', 'gem 1 value: ', gem1);
        gamelogic();
    })
    
    $("#crystal2").on("click", function(){
        totalScore= totalScore + gem2;
        $("#totalPoints").text(totalScore, numberToGuess);
        console.log('total score: ', totalScore,'||', 'gem 2 value: ', gem2);
        gamelogic();
    })
    
    $("#crystal3").on("click", function(){
        totalScore= totalScore + gem3;
        $("#totalPoints").text(totalScore, numberToGuess);
        console.log('total score: ', totalScore,'||', 'gem 3 value: ', gem3);
        gamelogic();
    })
    
    $("#crystal4").on("click", function(){
        totalScore= totalScore + gem4;
        $("#totalPoints").text(totalScore, numberToGuess);
        console.log('total score: ', totalScore,'||', 'gem 4 value: ', gem4);
        gamelogic();
    })
    reset();
    
    });
    