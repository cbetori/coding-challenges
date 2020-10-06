/*
Create a function that can take 1, 2, or 3 arguments 1 being start, 2 being stop and 3 being step and returns an array. 
This should be able to return float values.
*/

const decimalRange = (start, stop, step) => {
	let result = []
	let count = decimalCount(start)
	count = decimalCount(stop) > count ? decimalCount(stop) : count
	count = decimalCount(step) > count ? decimalCount(step) : count
	while (start <= stop) {
		result.push(start)
		if (start + step >= stop) break
		start = start + step
		start = Number.parseFloat(start).toFixed(count)
		start = parseFloat(start)
	}
	return result
}

const decimalCount = (number) => {
	let str = number.toString()
	let index = str.indexOf('.')
	return str.length - index - 1
}

test('decimal range #1', () => {
	expect(decimalRange(1.2, 5.9, 0.45)).toEqual([
		1.2,
		1.65,
		2.1,
		2.55,
		3.0,
		3.45,
		3.9,
		4.35,
		4.8,
		5.25,
		5.7,
	])
})
test('decimal range #2', () => {
	expect(decimalRange(0, 10, 1)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
})
test('decimal range #3', () => {
	expect(decimalRange(1, 7, 1.2)).toEqual([1.0, 2.2, 3.4, 4.6, 5.8])
})
