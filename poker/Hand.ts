import Card from "./Card";
import Deck from "./Deck";

class Hand {
    cardsInHand: Card[] = []
    constructor(deck: Deck){
        for (let i = 0; i < 5; i++){
            const newCard: Card = deck.giveCard()
            this.cardsInHand.push(newCard)
        }
    }
    getCard(deck: Deck): void{
        const newCard: Card = deck.giveCard()
        this.cardsInHand.push(newCard)
    }
    showHand(): void {
        let orderedArray = this.cardsInHand.sort((a: any, b: any) => a.cardValue - b.cardValue);
        this.cardsInHand = orderedArray
        if (this.cardsInHand.length > 0){
            for (let i = 0; i < this.cardsInHand.length; i++){
                let cardNumber: number = i + 1
                console.log(`${cardNumber}. ${this.cardsInHand[i].suit} ${this.cardsInHand[i].rank}`)
            }
        } else {
            console.log('Hand is empty')
        }
    }
    changeCard(cardNum: number, deck: Deck): void {
        this.cardsInHand[cardNum] = deck.giveCard()
    }
}

export default Hand