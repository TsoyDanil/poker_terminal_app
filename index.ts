const rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
const suits = ["♠", "♥", "♦", "♣"]
class Card {
    rank: string
    suit: string
    constructor() {
        this.rank = rank[Math.floor(Math.random()*rank.length)]
        this.suit = suits[Math.floor(Math.random()*suits.length)]
    }
}

for (let i = 0; i < 52; i++){
    const card = new Card()
    console.log(card);
    
}