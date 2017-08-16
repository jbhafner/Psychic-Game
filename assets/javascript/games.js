// Create psychic Object

	var psychic = {
		win: 0,
		losses: 0,
		guessLeft: 5,
		totalGuess: 0,
		lastKeyPressed: null,
		selectedCharacters: [],

		updateTotalsWin: function () {
			win=this.win+1;
			console.log("Win = " + win);
			console.log("+++++++++++");
		},

		updateTotalsLose: function() {
			losses=this.losses+1;
			console.log("Losses = " + losses);
			console.log("------------");
		},

	};


// Define Functions 

	var randomString = function(length) {
	    var text = "";
	    var possible = "abcdefghijklmnopqrstuvwxyz";
	    for(var i = 0; i < length; i++) {
	        text += possible.charAt(Math.floor(Math.random() * possible.length));
	    }
	    return text;
	}	

	function rewriteStats() {
		console.log("Win = " + psychic.win);
		console.log("Losses = " + psychic.losses);
		console.log("Guess Remaining = " + psychic.guessLeft);
		console.log("Total Guesses = " + psychic.totalGuess);
		console.log("Selected Characters = " + psychic.selectedCharacters);
		console.log("///// End of function rewriteStats /////");
	}

	function resetGame() {
		psychic.guessLeft = 5;
		psychic.totalGuess = 0;
		psychic.lastKeyPressed = null;
		psychic.selectedCharacters = [];
	}


// Program Logic

	if (psychic.guessLeft > 0) {
		console.log ("TG = " + psychic.totalGuess + " Guess Left = " + psychic.guessLeft)
		var rs = randomString(1);

		document.onkeyup=function(e) {
			console.log("User input is: "  + e.key);
			psychic.lastKeyPressed = e.key;
			psychic.selectedCharacters.push(e.key);
			psychic.guessLeft = psychic.guessLeft - 1;
			psychic.totalGuess = psychic.totalGuess + 1;
			console.log ("Computer Input Is: " + rs);
			console.log("==========");	
			rewriteStats();
			if (psychic.guessLeft > 0) {
				return;
				resetGame;
			}		
		};

	} else {
		// return;
		resetGame();
	}

		// if (psychic.lastKeyPressed === rs) {
		// 	psychic.updateTotalsWin();
		// } else {
		// 	psychic .updateTotalsLose();
		// }










