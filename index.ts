const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
const suits = ["♠", "♥", "♦", "♣"]
class Card {
    rank: string
    suit: string
    constructor(rank: string, suit: string) {
        this.rank = rank
        this.suit = suit
    }
}

// for (let i = 0; i < ranks.length; i++){
//     for (let j = 0; j < suits.length; j++){
//         const card = new Card(ranks[i], suits[j])
//         console.log(card)
//     }
// }