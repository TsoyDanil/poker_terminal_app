type valueOfCardObject = {[key: string]: number}

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

export default Card