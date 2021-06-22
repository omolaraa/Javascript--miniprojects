function getCard() {
 const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q', 'K', 'A'];
 const valueIdx = Math.floor(Math.random() * values.length)
 const value = values[valueIdx]
 const suits = ['club', 'spades', 'hearts', 'diamonds']
 const suitIdx = Math.floor(Math.random() * suits.length)
 const suit = suits[suitIdx]
 console.log({value: value, suit: suit})
}
getCard()

// Method 2
function pick(arr) {
 const index = Math.floor(Math.random() * arr.length)
 return arr[index];
}
function getCard2() {
 const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q', 'K', 'A'];
 const suits = ['club', 'spades', 'hearts', 'diamonds']
 console.log({value: pick(values), suit: pick(suits)})
}
getCard2()