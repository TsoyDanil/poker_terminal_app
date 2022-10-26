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
        checker.checkForFiveRanks(hand)
        expect(checker.fiveRanksInRow).toEqual(true)
    })
    test('Check for five same suits in a row', () => {
        hand.cardsInHand = [
            { rank: '3', suit: '♦', cardValue: 3 },
            { rank: '4', suit: '♦', cardValue: 4 },
            { rank: '5', suit: '♦', cardValue: 5 },
            { rank: '6', suit: '♦', cardValue: 6 },
            { rank: '7', suit: '♦', cardValue: 7 }
        ]
        checker.checkForFiveSuits(hand)
        expect(checker.fiveSuitsInRow).toEqual(true)
    })
    test('Check for pair', () => {
        hand.cardsInHand = [
            { rank: '3', suit: '♦', cardValue: 3 },
            { rank: '3', suit: '♠', cardValue: 3 },
            { rank: '5', suit: '♦', cardValue: 5 },
            { rank: '6', suit: '♦', cardValue: 6 },
            { rank: '7', suit: '♦', cardValue: 7 }
        ]
        checker.cardOfEachRank(hand)
        checker.checkForPair()
        expect(checker.isPair).toEqual(true)
    })
    test('Check for triple', () => {
        hand.cardsInHand = [
            { rank: '3', suit: '♦', cardValue: 3 },
            { rank: '3', suit: '♠', cardValue: 3 },
            { rank: '3', suit: '♣', cardValue: 3 },
            { rank: '6', suit: '♦', cardValue: 6 },
            { rank: '7', suit: '♦', cardValue: 7 }
        ]
        checker.cardOfEachRank(hand)
        checker.checkForTriple()
        expect(checker.isTriple).toEqual(true)
    })
    test('Check for care', () => {
        hand.cardsInHand = [
            { rank: '3', suit: '♦', cardValue: 3 },
            { rank: '3', suit: '♠', cardValue: 3 },
            { rank: '3', suit: '♣', cardValue: 3 },
            { rank: '3', suit: '♥', cardValue: 3 },
            { rank: '7', suit: '♦', cardValue: 7 }
        ]
        checker.cardOfEachRank(hand)
        checker.checkForCare()
        expect(checker.isCare).toEqual(true)
    })
    test('Check for flush', () => {
        hand.cardsInHand = [
            { rank: '3', suit: '♦', cardValue: 3 },
            { rank: '9', suit: '♦', cardValue: 3 },
            { rank: 'K', suit: '♦', cardValue: 3 },
            { rank: 'A', suit: '♦', cardValue: 3 },
            { rank: 'Q', suit: '♦', cardValue: 7 }
        ]
        checker.cardOfEachSuit(hand)
        checker.checkForFiveSuits(hand)
        checker.checkForFlush()
        expect(checker.isFlush).toEqual(true)
    })
})

