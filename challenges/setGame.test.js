/*In the game Set, three cards form a set if each of the cards are identical or completely different for each of the four properties. 
All three cards must:

Have the same color or different colors.
Have the same number or different numbers.
Have the same shades or different shades.
Have the same shape or different shapes.
The four properties are:

Colors: red, purple, green
Numbers: 1, 2, 3
Shades: empty, lined, full
Shapes: squiggle, oval, diamond
Here, a set is represented by an array containing three cards. Each card is represented by an object of properties and values. 
Write a function that determines whether three cards constitute a valid set.*/

const setGame = (set) => {
	let testSet = { color: false, number: false, shade: false, shape: false }
	for (let e in testSet) {
		if (
			(set[0][e] === set[1][e] &&
				set[0][e] === set[2][e] &&
				set[1][e] === set[2][e]) ||
			(set[0][e] !== set[1][e] &&
				set[0][e] !== set[2][e] &&
				set[1][e] !== set[2][e])
		) {
			testSet[e] = true
		}
	}
	return checkResults(testSet)
}

let checkResults = (testSet) => {
	let result = true
	for (let e in testSet) {
		if (testSet[e] === false) {
			result = false
			break
		}
	}
	return result
}

test('set game #1', () => {
	expect(
		setGame([
			{ color: 'green', number: 1, shade: 'empty', shape: 'squiggle' },
			{ color: 'green', number: 2, shade: 'empty', shape: 'diamond' },
			{ color: 'green', number: 3, shade: 'empty', shape: 'oval' },
		])
	).toEqual(true)
})

test('set game #2', () => {
	expect(
		setGame([
			{ color: 'purple', number: 1, shade: 'full', shape: 'oval' },
			{ color: 'green', number: 1, shade: 'full', shape: 'oval' },
			{ color: 'red', number: 1, shade: 'full', shape: 'oval' },
		])
	).toEqual(true)
})

test('set game #3', () => {
	expect(
		setGame([
			{ color: 'purple', number: 3, shade: 'full', shape: 'oval' },
			{ color: 'green', number: 1, shade: 'full', shape: 'oval' },
			{ color: 'red', number: 3, shade: 'full', shape: 'oval' },
		])
	).toEqual(false)
})
