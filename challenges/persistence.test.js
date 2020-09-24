/*
The additive persistence of an integer, n, is the number of times you have to replace n with the sum of its digits until n becomes a single digit integer.

The multiplicative persistence of an integer, n, is the number of times you have to replace n with the product of its digits until n becomes a single digit integer.

Return its multiplicative persistence.

*/

const persistence = (array) => {
	let arrayStr = array.toString()
	if (arrayStr.length === 1) return 0
	let iterations = 0
	while (arrayStr.length > 1) {
		arrayStr = multiplyArray(arrayStr)
		iterations++
	}
	return iterations
}

const multiplyArray = (string) => {
	let result = 1
	for (let i = 0; i < string.length; i++) {
		result = result * parseInt(string[i])
	}
	return result.toString()
}

test('persistence #1', () => {
	expect(persistence(77)).toEqual(4)
})

test('persistence #2', () => {
	expect(persistence(123456)).toEqual(2)
})

test('persistence #3', () => {
	expect(persistence(4)).toEqual(0)
})
