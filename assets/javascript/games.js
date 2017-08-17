// *** Create psychic Object Section ***

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

	console.log ("Result of defining object below:");
	rewriteStats()

// *** Define Functions Section ***

	var randomString = function(length) {
	    var text = "";
	    var possible = "abcdefghijklmnopqrstuvwxyz";
	    for(var i = 0; i < length; i++) {
	        text += possible.charAt(Math.floor(Math.random() * possible.length));
	    }
	    return text;
	}	

	function rewriteStats() {
		console.log(" /// Win = " + psychic.win + ", Losses = " + psychic.losses + ", Guess Remaining = " + psychic.guessLeft + ", Total Guess " + psychic.totalGuess + ", Selected Characters = " + psychic.selectedCharacters + ", User input is: "  + psychic.lastKeyPressed + ", Computer Input Is: " + rs + " ///");
	}

// *** Program Logic Section ***

// Generate computer number

var rs = randomString(1);

// listen for onkeyup event

document.onkeyup=function(e) {

	// recrord keypress by user
	psychic.lastKeyPressed = e.key;
	psychic.selectedCharacters.push(e.key);

	// decrement the number of guesses left
	psychic.guessLeft--;
	console.log("--- Guess left: " + psychic.guessLeft + " ---");
	psychic.totalGuess++;

	// If user guesses the letter and wins
	if (psychic.lastKeyPressed === rs) {
		console.log("You win!");
		psychic.win++;
		psychic.guessLeft = 5;
		console.log("--- Guess left: " + psychic.guessLeft + " ---");
		psychic.totalGuess = 0;
		psychic.selectedCharacters = [];
		rs=randomString(1);
	}

	// If user reaches maximum guesses and loses
	if (psychic.guessLeft == 0) {
		console.log("You Lost :-(");
		psychic.losses++;
		psychic.guessLeft=5;
		psychic.totalGuess=0;
		psychic.selectedCharacters=[];
		rs=randomString(1);
	}

	// Write results to index.html
	var html = "<p><h1>The Psychic Game</h1></p>" + 
	"<p><h4>Guess what letter I\'m thinking of</h4></p>" + 
	"<p><h4>Wins: " + psychic.win + 
	"</h4></p>" + "<p><h4>Losses: " + psychic.losses + 
	"</h4></p>" + "<p><h4>Guesses Left: " + psychic.guessLeft + 
	"</h4></p>" + "<p><h4>Your guesses so far: " + psychic.selectedCharacters + "</h4></p>";
	// place html into the game ID
	document.querySelector("#game").innerHTML = html;
	rewriteStats();
};










