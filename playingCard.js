function pick(arr) {
 const index = Math.floor(Math.random() * arr.length);
 return arr[index];
}
function getCard() {
 const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q', 'K', 'A'];
 const value = pick(values)
 const suits = ['club', 'spades', 'hearts', 'diamonds']
 const suit = pick(suits)
 console.log ({value: value, suit: suit})
}
getCard()