
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var winCounter = 0;
var lossCounter = 0;
var guessesLeft = 9;
var playingLetters = false;
var playingNumbers = false;

function isLetter() {

	var lettersGuessed = [];
	playingLetters = true;

	document.getElementById("winTag").innerHTML = '<div id="winTag"></div>';
	document.getElementById("lossTag").innerHTML = '<div id="lossTag"></div>';
	
	var computerLetter = letters[Math.floor(Math.random() * letters.length)];

	alert("Select any letter key to play.");

	document.onkeyup = function(event) {
        
        var userGuess = event.key;

        if (letters.indexOf(userGuess) > -1){

	        if (guessesLeft !== 0){
			    if ((userGuess !== computerLetter) && (guessesLeft > 0)){
			    	lettersGuessed.push(userGuess);
			    	guessesLeft--;
			    	document.getElementById("guessLeft").innerHTML = "<p>Guesses Left : " + guessesLeft + "</p>";
			    	document.getElementById("lettersGuessed").innerHTML = "<p>Your Guesses so far: " + lettersGuessed + "</p>";

			    } else if (userGuess === computerLetter){
			    	document.getElementById("winTag").innerHTML =
			    	'<div class="alert alert-dismissible alert-success">' +
					'<button type="button" class="close" data-dismiss="alert">&times;</button>' +
					'<strong>Oh Damn!</strong> You are just too good.' +
					'</div>';
			    	winCounter ++;
			    	guessesLeft = 9;
			    	document.getElementById("wins").innerHTML = "<p>Wins: " + winCounter + "</p>";
			    	document.getElementById("guessLeft").innerHTML = "<p>Guesses Left : 10</p>";
			    	document.getElementById("lettersGuessed").innerHTML = "<p>Your Guesses so far: </p>";
			    }
			 } else {
			 	document.getElementById("lossTag").innerHTML =
			    	'<div class="alert alert-dismissible alert-danger">' +
					'<button type="button" class="close" data-dismiss="alert">&times;</button>' +
					'<strong>Uh oh!</strong> I only want psychics around here, LOL!!. The answer was ' + computerLetter +
					'</div>';
			 	
			 	lettersGuessed = [];
			 	lossCounter ++;
			 	guessesLeft = 9;
			 	document.getElementById("losses").innerHTML = "<p>Losses: " + lossCounter + "</p>";
			 	document.getElementById("guessLeft").innerHTML = "<p>Guesses Left : 10</p>";
				document.getElementById("lettersGuessed").innerHTML = "<p>Your Guesses so far: </p>";
			 }
		}

    };

}

