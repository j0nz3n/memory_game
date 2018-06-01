var cards = ['king', 'queen', 'king', 'queen'];
var cardsInPLay = [];
var cardOne = cards[0];
var cardTwo = cards[1];

cardsInPLay.push(cardOne);
cardsInPLay.push(cardTwo);

if (cardsInPLay.length === 2){
	if (cardOne === cardTwo){
		alert("Congradulations, you win!")
	}else {alert("Better luck next time!")};
};
console.log("User flipped " + cardsInPLay);