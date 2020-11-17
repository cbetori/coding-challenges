//Create a function which returns the number of true values there are in an array.
//Return 0 if given an empty array.
//All array items are of the type bool (true or false).

const countTrueValuesForLoop = (array) => {
	let result = 0
	for (let i = 0; i < array.length; i++) {
		if (array[i]) result++
	}
	return result
}

const countTrueValuesReduce = (array) => {
	if (array.length === 0) return 0
	let result = 0
	array.reduce((acc, value, index) => {
		if (value || acc) {
			result++
		}
	})
	return result
}

const countTrueValuesFilter = (array) => {
	let result = array.filter((value) => value)
	return result.length
}

test('how much is true #1', () => {
	expect(countTrueValuesForLoop([true, false, false, true, false])).toEqual(2)
})

test('how much is true #2', () => {
	expect(countTrueValuesForLoop([false, false, false, false])).toEqual(0)
})

test('how much is true #3', () => {
	expect(countTrueValuesForLoop([])).toEqual(0)
})

test('how much is true #4', () => {
	expect(countTrueValuesReduce([true, false, false, true, false])).toEqual(2)
})

test('how much is true #5', () => {
	expect(countTrueValuesReduce([false, false, false, false])).toEqual(0)
})

test('how much is true #6', () => {
	expect(countTrueValuesReduce([])).toEqual(0)
})

test('how much is true #7', () => {
	expect(countTrueValuesFilter([true, false, false, true, false])).toEqual(2)
})

test('how much is true #8', () => {
	expect(countTrueValuesFilter([false, false, false, false])).toEqual(0)
})

test('how much is true #9', () => {
	expect(countTrueValuesFilter([])).toEqual(0)
})
