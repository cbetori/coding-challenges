//Create a function which returns the number of true values there are in an array.
//Return 0 if given an empty array.
//All array items are of the type bool (true or false).

const countTrueValues = (array) => {
	let result = 0
	for (let i = 0; i < array.length; i++) {
		if (array[i]) result++
	}
	return result
}

test('how much is true #1', () => {
	expect(countTrueValues([true, false, false, true, false])).toEqual(2)
})

test('how much is true #2', () => {
	expect(countTrueValues([false, false, false, false])).toEqual(0)
})

test('how much is true #3', () => {
	expect(countTrueValues([])).toEqual(0)
})
