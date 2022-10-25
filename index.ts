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

class Deck {
    cardsInDeck: Card[] = []
    constructor(){
        for (let i = 0; i < ranks.length; i++){
            for (let j = 0; j < suits.length; j++){
                const card = new Card(ranks[i], suits[j])
                this.cardsInDeck.push(card)
            }
        }
    }
    showDeck = (): void => {
        console.log(this.cardsInDeck)
    }
    // mixDeck = (): void => {
    //     this.cardsInDeck.sort(() => Math.random() -0.5)
    // }
    mixDeck(): void {
        this.cardsInDeck.sort(() => Math.random() -0.5)
    }
}

const deck = new Deck()
deck.showDeck()
deck.mixDeck()
deck.showDeck()
console.log('____________________________')
deck.mixDeck()
deck.showDeck()
console.log('_____________________________');
