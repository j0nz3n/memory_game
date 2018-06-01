var cards = [
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
}
];
var cardsInPLay = [];

function checkForMatch (){
	if (cardsInPLay[0] === cardsInPLay[1]){
		console.log('You found a match!');
	} else {
		console.log('Sorry, try again.');
	}
};

function flipCard (cardIdOne, cardIdTwo) {
	console.log('User flipped ' + cards[cardIdOne].rank);
	console.log('User flipped ' + cards[cardIdOne].suit);
	console.log('User flipped ' + cards[cardIdOne].cardImage);
	cardsInPLay.push(cards[cardIdOne].rank);
	console.log('User flipped ' + cards[cardIdTwo].rank);
	console.log('User flipped ' + cards[cardIdTwo].suit);
	console.log('User flipped ' + cards[cardIdTwo].cardImage);
	cardsInPLay.push(cards[cardIdTwo].rank);
	checkForMatch();
};

function createBoard () {
	for (var i = 0; i < cards.length, i++) {
		var cardElement = document.createElement("img");
	}
};
flipCard(0,2);