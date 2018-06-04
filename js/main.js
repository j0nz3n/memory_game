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
}];

var cardsInPLay = [];

function flipBack () {
	for (var i = 0; i < cardsInPLay.length; i++) {
		cardsInPLay[i].setAttribute('src', 'images/back.png')
	}
};

function checkForMatch () {
	if (cardsInPLay.length === 2 && (cardsInPLay[0] === cardsInPLay[1])) {
			alert('You found a match!');
	}  else if (cardsInPLay.length === 2 && (cardsInPLay[0] !== cardsInPLay[1])) { alert("Please try again.") }
};

function flipCard () {
	var cardId = this.getAttribute('data-id')
	this.setAttribute('src', cards[cardId].cardImage)
	/*console.log('User flipped ' + cards[cardId].rank);
	console.log('User flipped ' + cards[cardId].suit);
	console.log('User flipped ' + cards[cardId].cardImage);*/
	cardsInPLay.push(cards[cardId].rank);
	checkForMatch();
};

function createBoard () {
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement("img");
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		var gameBoard = document.getElementById('game-board')
		gameBoard.appendChild(cardElement);
	} 
};

createBoard();