
import Card from "./poker/Card"
import Deck from "./poker/Deck"
import Hand from "./poker/Hand"
import Checker from "./poker/Checker"

const deck = new Deck()
const hand = new Hand()
deck.mixDeck()
hand.getCard(deck)
hand.getCard(deck)
hand.getCard(deck)
hand.getCard(deck)
hand.getCard(deck)
const checker = new Checker()
hand.showHand()
checker.cardOfEachSuit(hand)
checker.cardOfEachRank(hand)

console.log(checker.sameRanks)
console.log(checker.sameSuit)