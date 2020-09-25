/*
In this challenge you will be given an array similar to the following:

[[3], 4, [2], [5], 1, 6]
In words, elements of the array are either an integer or an array containing a single integer. 
We humans can clearly see that this array can reasonably be sorted according to "the content of the elements" as:

[1, [2], [3], 4, [5], 6]
Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".
*/

const sortArrayOfArrays = (array) => {
	let result = array.sort((a, b) => sort(a, b))
	return result
}

const sort = (a, b) => {
	let aClean
	let bClean
	if (typeof a === 'object') {
		aClean = a[0]
	} else {
		aClean = a
	}
	if (typeof b === 'object') {
		bClean = b[0]
	} else {
		bClean = b
	}
	return aClean - bClean
}

test('sort array of arrays #1', () => {
	expect(sortArrayOfArrays([4, 1, 3])).toEqual([1, 3, 4])
})

test('sort array of arrays #2', () => {
	expect(sortArrayOfArrays([[4], [1], [3]])).toEqual([[1], [3], [4]])
})

test('sort array of arrays #3', () => {
	expect(sortArrayOfArrays([4, [1], 3])).toEqual([[1], 3, 4])
})

test('sort array of arrays #4', () => {
	expect(sortArrayOfArrays([[4], 1, [3]])).toEqual([1, [3], [4]])
})

test('sort array of arrays #5', () => {
	expect(sortArrayOfArrays([[3], 4, [2], [5], 1, 6])).toEqual([
		1,
		[2],
		[3],
		4,
		[5],
		6,
	])
})
