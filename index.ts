type valueOfCard = { [key: string]: number }
const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
const suits = ["♠", "♥", "♦", "♣"]
const cardValues: valueOfCard = {
    "2": 2, 
    "3": 3, 
    "4": 4, 
    "5": 5, 
    "6": 6, 
    "7": 7, 
    "8": 8, 
    "9": 9, 
    "10": 10,
    "J": 11, 
    "Q": 12, 
    "K": 13, 
    "A": 14, 
}

class Card {
    rank: string
    suit: string | undefined
    cardValue: number
    constructor(rank: string, suit: string) {
        this.rank = rank
        this.suit = suit
        this.cardValue = cardValues[rank]
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

class Checker {
    checkHand(){

    }
}

const deck = new Deck()

const hand = new Hand()

hand.getCard(deck)
hand.getCard(deck)
hand.getCard(deck)
hand.getCard(deck)
hand.getCard(deck)
hand.showHand()





