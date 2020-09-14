/*Write a function that returns the amount of possible combinations when drawing the given amount of cards from a deck of cards.
The function must take two inputs: k is the amount of cards to draw. n the total amount of cards in the deck.
For example, a poker hand can be described as a 5-combination (k = 5) of cards from a 52 card deck (n = 52). The 5 cards of the hand are all distinct, and the order of cards in the hand does not matter. There are 2,598,960 such combinations.
The amount of combinations should be returned as an integer.*/

const combinationsMethodOne = (combo, total) => {
	let totalFractoral = 1
	for (let i = 1; i <= total; i++) {
		totalFractoral = i * totalFractoral
	}
	let comboFractoral = 1
	for (let x = 1; x <= combo; x++) {
		comboFractoral = x * comboFractoral
	}
	let totalLessComboFractoral = 1
	for (let y = 1; y <= total - combo; y++) {
		totalLessComboFractoral = y * totalLessComboFractoral
	}
	return parseInt(totalFractoral / (comboFractoral * totalLessComboFractoral))
}

const combinationsMethodTwo = (combo, total) => {
	let comboFractoral = 1
	let totalFractoral = 1
	let updatingTotal = total
	for (let i = 1; i < combo + 1; i++) {
		totalFractoral = updatingTotal * totalFractoral
		comboFractoral = i * comboFractoral
		updatingTotal = updatingTotal - 1
	}
	return parseInt(totalFractoral / comboFractoral)
}

test('possible combinations #1', () => {
	expect(combinationsMethodOne(52, 52)).toEqual(1)
})

test('possible combinations #2', () => {
	expect(combinationsMethodOne(5, 52)).toEqual(2598960)
})

test('possible combinations #4', () => {
	expect(combinationsMethodTwo(52, 52)).toEqual(1)
})

test('possible combinations #5', () => {
	expect(combinationsMethodTwo(5, 52)).toEqual(2598960)
})
