// Define Variables
var	win = 0;
var	losses = 0;
var	guessLeft = 5;
var	totalGuess = 0;
var guessedLetter = [];

// Create random letter from computer
var randomString = function(length) {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";
    for(var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;

};
	rs=randomString(1)
    console.log("Computer generated number is: " + rs);


	// updateTotalsWin: function () {
	// 	win=win+1;
	// 	guessLeft=guessLeft-1;
	// 	totalGuess=totalGuess+1;
	// 	console.log(win);
	// 	console.log(guessLeft);
	// 	console.log(totalGuess);
	// 	console.log("------------");
	// }

	// updateTotalsLose: function() {
	// 	losses=losses+1;
	// 	guessLeft=guessLeft-1;
	// 	totalGuess=totalGuess+1;
	// 	console.log(losses);
	// 	console.log(guessLeft);
	// 	console.log(totalGuess);
	// 	console.log("------------");
	// }





