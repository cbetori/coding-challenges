/*
Create a function that takes an array of integers arr and sort the elements of the array by decreasing frequency of the elements. 
If two elements have the same frequency, sort them by increasing value.
All input numbers will be between 0-9.
*/

const sortFreq = (array) => {
	let freqObj = {}
	array.map((e) => (freqObj[e] = 0))
	array.map((e) => (freqObj[e] = freqObj[e] + 1))
	let freqArr = Object.entries(freqObj)
	freqArr.sort((a, b) => order(a, b))
	let result = []
	for (let i = 0; i < freqArr.length; i++) {
		if (freqArr[[i][0]])
			for (let x = 0; x < freqArr[i][1]; x++) {
				result.push(parseInt(freqArr[i][0]))
			}
	}
	return result
}

const order = (a, b) => {
	if (a[1] === b[1]) return a[0] - b[0]
	return b[1] - a[1]
}

test('sort by frequency #1', () => {
	expect(sortFreq([2, 3, 5, 3, 7, 9, 5, 3, 7])).toEqual([
		3,
		3,
		3,
		5,
		5,
		7,
		7,
		2,
		9,
	])
})
test('sort by frequency #1', () => {
	expect(sortFreq([1, 2, 3, 0, 5, 0, 1, 6, 8, 8, 6, 9, 1])).toEqual([
		1,
		1,
		1,
		0,
		0,
		6,
		6,
		8,
		8,
		2,
		3,
		5,
		9,
	])
})
test('sort by frequency #1', () => {
	expect(sortFreq([4, 4, 2, 5, 1, 1, 3, 3, 2, 8])).toEqual([
		1,
		1,
		2,
		2,
		3,
		3,
		4,
		4,
		5,
		8,
	])
})
