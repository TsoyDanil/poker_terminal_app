
import Card from "./poker/Card"
import Deck from "./poker/Deck"
import Hand from "./poker/Hand"
import Checker from "./poker/Checker"

const deck = new Deck()
deck.mixDeck()
const hand = new Hand(deck)
const checker = new Checker()
checker.cardOfEachSuit(hand)
checker.cardOfEachRank(hand)
checker.orderCards(hand)
checker.cardOfEachRank(hand)
checker.cardOfEachSuit(hand)
console.log(checker.sameSuit)