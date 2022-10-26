import Card from "./Card";
import Deck from "./Deck";
import Hand from "./Hand";
class Checker {
    sameSuit: any
    sameRanks: any
    twoSameRank: boolean = false
    threeSameRank: boolean = false
    fourOfSameRank: boolean = false
    twoOfSameSuit: boolean = false
    threeOfSameSuit: boolean = false
    fourOfSameSuit: boolean = false
    fiveOfSameSuit: boolean = false
    checkHand(){

    }
    cardOfEachSuit(hand: Hand): void{
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
        const result: any[]  = 
        [
        {suit:"♣", amount: clubs}, 
        {suit: "♦", amount: diamonds}, 
        {suit: "♥", amount: hearts}, 
        {suit: "♠", amount: spades}
        ]
        let finalResult: any[] = []
        result.forEach(obj => {
            obj.amount > 0 ? finalResult.push(obj) : ''
        })
        this.sameSuit = finalResult
    }
    cardOfEachRank(hand: Hand): void{
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
        const result: any[] = 
        [
            {rank: "1", amount: one}, 
            {rank: "2", amount: two}, 
            {rank: "3", amount: three}, 
            {rank: "4", amount: four}, 
            {rank: "5", amount: five},
            {rank: "6", amount: six}, 
            {rank: "7", amount: seven},
            {rank: "8", amount: eight},
            {rank: "9", amount: nine}, 
            {rank: "10", amount: ten},
            {rank: "J", amount: J},
            {rank: "Q", amount: Q},
            {rank: "K", amount: K},
            {rank: "A", amount: A}
        ]
        let finalResult: any[] = []
        result.forEach(obj => {
            obj.amount > 1 ? finalResult.push(obj) : ''
        })
        this.sameRanks = finalResult
    }
    cardsOrder(hand: Hand): void{
        let orderedArray = hand.cardsInHand.sort((a: any, b: any) => a.cardValue - b.cardValue);
        hand.cardsInHand = orderedArray
        console.log(hand.cardsInHand)
    }
}

export default Checker