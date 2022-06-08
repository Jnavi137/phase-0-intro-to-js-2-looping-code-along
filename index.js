
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}
function writeCards(array, event) {
    const cards = []
  for (let p = 0; p < array.length; p++) {
     cards.push(`Thank you, ${array[p]}, for the wonderful ${event} gift!`);
  }
  return cards
}
function countDown() {
    let q = 10;
    while (q >= 0) {
        console.log(q--);
    }
}