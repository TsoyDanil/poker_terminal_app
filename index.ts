type valueOfCardObject = { [key: string]: number }
type pairOfCards = {[key: string]: number}
const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
const suits = ["♠", "♥", "♦", "♣"]
const cardValues: valueOfCardObject = {
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
    public rank: string
    public suit: string
    public cardValue: number
    constructor(rank: string, suit: string) {
        this.rank = rank
        this.suit = suit
        this.cardValue = cardValues[this.rank]
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
    cardOfEachSuit(hand: Hand): pairOfCards[]{
        let result: pairOfCards[] = []
        let clubs: number = 0
        let diamonds: number = 0
        let hearts: number = 0
        let spades: number = 0
        for (let i = 0; i < hand.cardsInHand.length; i++){
            switch (hand.cardsInHand[i].suit){
                case "♣":
                    clubs++
                    break
                case "♦": 
                    diamonds++
                    break
                case "♥":
                    hearts++
                    break
                case "♠":
                    spades++
                    break
            }
        }
        result.push({"♣": clubs}, {"♦": diamonds}, {"♥": hearts}, {"♠": spades})
        console.log(result)
        return result
    }
    cardOfEachRank(hand: Hand){
        let result: pairOfCards[] = []
        let one: number = 0
        let two: number = 0
        let three: number = 0
        let four: number = 0
        let five: number = 0
        let six: number = 0
        let seven: number = 0
        let eight: number = 0
        let nine: number = 0
        let ten: number = 0
        let J: number = 0
        let Q: number = 0
        let K: number = 0
        let A: number = 0
        hand.cardsInHand.forEach(card => {
            switch (card.rank){
                case "1": 
                    one++
                    break
                case "2": 
                    two++
                    break
                case "3": 
                    three++
                    break
                case "4": 
                    four++
                    break
                case "5": 
                    five++
                    break
                case "6": 
                    six++
                    break
                case "7": 
                    seven++
                    break
                case "8": 
                    eight++
                    break
                case "9": 
                    nine++
                    break
                case "10": 
                    ten++
                    break
                case "J":
                    J++
                    break
                case "Q": 
                    Q++
                    break
                case "K":
                    K++
                    break
                case "A": 
                    A++
                    break
            }
        })
        one > 1 ? result.push({'1': one}) : ''
        two > 1 ? result.push({'2': two}) : ''
        three > 1 ? result.push({'3': three}) : ''
        four > 1 ? result.push({'4': four}) : ''
        five > 1 ? result.push({'5': five}) : ''
        six > 1 ? result.push({'6': six}) : ''
        seven > 1 ? result.push({'7': seven}) : ''
        eight > 1 ? result.push({'8': eight}) : ''
        nine > 1 ? result.push({'9': nine}) : ''
        ten > 1 ? result.push({'10': ten}) : ''
        J > 1 ? result.push({'J': J}) : ''
        Q > 1 ? result.push({'Q': Q}) : ''
        K > 1 ? result.push({'K': K}) : ''
        A > 1 ? result.push({'A': A}) : ''
        console.log(result)
    }
}

const deck = new Deck()
const hand = new Hand()
const checker = new Checker()
deck.mixDeck()
hand.getCard(deck)
hand.getCard(deck)
hand.getCard(deck)
hand.getCard(deck)
hand.getCard(deck)
hand.showHand()
checker.cardOfEachSuit(hand)
checker.cardOfEachRank(hand)






