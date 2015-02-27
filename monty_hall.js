var montyHall = function(){
	var prizes = ['goat','goat','goat'];
	var carIndex = getRandomInt(0,2);
	prizes[carIndex] = 'car';


	//first guess
	var firstGuessIndex= getRandomInt(0,2);
	var firstGuess = prizes[firstGuessIndex];
	prizes.splice(firstGuessIndex, 1);



	//reveal incorrect guess;

	var revealIndex = prizes.indexOf('goat');
	var reveal = prizes[revealIndex];

	//switch?yes!


	prizes.splice(revealIndex, 1);
	


	var secondGuess = prizes[0];

	if(secondGuess === 'car'){
		//winner!
		return true;
	}
	else{
		//loser!
		return false;
	}




};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var win =0;
var played = 0;
for(var i=0;i<1000;i++){
	if(montyHall()){
		win++;
		
	}
	played++;



}
console.log("winning percentage after 1000 games is",(win/played)*100);