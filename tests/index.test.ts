import Card from "../poker/Card";
import Deck from "../poker/Deck";
import Hand from "../poker/Hand";
import Checker from "../poker/Checker";

const deck = new Deck()
deck.mixDeck()
const hand = new Hand(deck)
const checker = new Checker()

describe ('Check order', () => {
    test('Check for Five in a row', () => {
        hand.cardsInHand = [
            { rank: '3', suit: '♦', cardValue: 3 },
            { rank: '4', suit: '♠', cardValue: 4 },
            { rank: '5', suit: '♥', cardValue: 5 },
            { rank: '6', suit: '♦', cardValue: 6 },
            { rank: '7', suit: '♦', cardValue: 7 }
        ]
        checker.checkForFive(hand)
        expect(checker.fiveInRow).toEqual(true)
    })
})

// describe('Check desk', () => {
//     test(`Cards creation`, () => {
//         const deck = new Deck()
//         deck.createCards()
//         expect(deck.cards).toEqual(cards)
//     })
// })