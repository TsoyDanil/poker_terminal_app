import Card from "./Card"

const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
const suits = ["♠", "♥", "♦", "♣"]

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
    showDeck(): void {
        console.log(this.cardsInDeck)
    }
    giveCard(): Card {
        let randNum: number = Math.floor(Math.random()*this.cardsInDeck.length)
        const cardHolder: Card = this.cardsInDeck[randNum]
        this.cardsInDeck.splice(randNum, 1)
        return cardHolder
    }
    mixDeck(): void {
        this.cardsInDeck.sort(() => Math.random() -0.5)
    }
}

export default Deck