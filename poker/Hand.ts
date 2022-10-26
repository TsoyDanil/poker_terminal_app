import Card from "./Card";
import Deck from "./Deck";

class Hand {
    cardsInHand: Card[] = []
    getCard(deck: Deck): void{
        const newCard: Card = deck.giveCard()
        this.cardsInHand.push(newCard)
    }
    showHand(): void {
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
        this.cardsInHand.splice(cardNum - 1, 1)
        this.getCard(deck)
    }
}

export default Hand