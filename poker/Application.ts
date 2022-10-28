import Card from "./Card";
import Deck from "./Deck";
import Hand from "./Hand";
import Checker from "./Checker";

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

class Application {
    statGame(): void{
        const deck = new Deck()
        deck.mixDeck()
        const hand = new Hand(deck)
        const checker = new Checker()
        hand.showHand()
        readline.question('Would you like to change cards? Type "yes" if you want. Press enter if you don`t', (input: string) => {
            if (input.trim() === 'yes') {
                readline.question('Choose cards to change. Type only numbers', (input: string) => {
                    let numArray: number[] = []
                    for (let i = 0; i < input.length; i++){
                        if (input[i].trim() !== ''){
                            if (parseInt(input[i])){
                                numArray.push(parseInt(input[i]))
                            }
                        }
                    }
                    for (let i = 0; i < numArray.length; i++){
                        if (numArray[i] <= 5){
                            console.log(hand.cardsInHand[numArray[i]-1])
                            hand.changeCard((numArray[i]-1), deck)
                        } else {
                            console.log(`Card number ${numArray[i]}: invalid card number`)
                        }
                    }
                    console.log('You current hand:')
                    hand.showHand()
                    console.log('Here is your combo:');
                    checker.checkHand(hand)
                    if (checker.isRoyalFlush){
                        console.log('Royal Flush. It gives you 10 points')
                    } else if (checker.isStraightFlush){
                        console.log('Straight Flush. It gives you 9 points')
                    } else if (checker.isCare){
                        console.log('Care. It gives you 8 points')
                    } else if (checker.isFullHouse){
                        console.log('Full house. It gives you 7 points')
                    }else if (checker.isFlush){
                        console.log('Flush. It gives you 6 points')
                    } else if (checker.isStraight){
                        console.log('Straight. It gives you 5 points')
                    } else if (checker.isTriple){
                        console.log('Triple. It gives you 4 points') 
                    } else if (checker.isTwoPair){
                        console.log('Two Pair. It gives you 3 points')
                    } else if (checker.isPair){
                        console.log('Pair. It gives you 2 points')
                    } else {
                        console.log('Sorry but no combo was found, but at least you tried. You get 1 points')                        
                    }
                    readline.question('Another one? Type "yes" if you would like. Enter if you don`t', (input: string) =>{
                        if (input.trim() === 'yes'){
                            this.statGame()
                        } else{
                            console.log('You refused to play')
                            readline.close()
                        }
                    })
                })
            } else {
                console.log('You decided not to change cards')
                console.log('Here is your combo:');
                checker.checkHand(hand)
                if (checker.isRoyalFlush){
                    console.log('Royal Flush. It gives you 10 points')
                    
                } else if (checker.isStraightFlush){
                    console.log('Straight Flush. It gives you 9 points')
                    
                } else if (checker.isCare){
                    console.log('Care. It gives you 8 points')
                } else if (checker.isFullHouse){
                    console.log('Full house. It gives you 7 points')
                }
                else if (checker.isFlush){
                    console.log('Flush. It gives you 6 points')
                    
                } else if (checker.isStraight){
                    console.log('Straight. It gives you 5 points')
                    
                } else if (checker.isTriple){
                    console.log('Triple. It gives you 4 points')
                    
                } else if (checker.isTwoPair){
                    console.log('Two Pair. It gives you 3 points')
                    
                } else if (checker.isPair){
                    console.log('Pair. It gives you 2 points')
                    
                } else {
                    console.log('Sorry but no combo was found, but at least you tried. You get 1 points')
                    
                }
            }
            readline.question('Another one? Type "yes" if you would like. Enter if you don`t', (input: string) =>{
                if (input.trim() === 'yes'){
                    this.statGame()
                } else{
                    console.log('You refused to play')
                    readline.close()
                }
            })
        })
    }
}

export default Application