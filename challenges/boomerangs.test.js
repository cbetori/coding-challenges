/*A boomerang is a V-shaped sequence that is either upright or upside down. 
Specifically, a boomerang can be defined as: sub-array of length 3, 
with the first and last digits being the same and the middle digit being different.
Ex: [3, 7, 3], [1, -1, 1], [5, 6, 5] 
Be aware that boomerangs can overlap, like so:
[1, 7, 1, 7, 1, 7, 1]
5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]
*/

let countBoomerangs = (array) => {
	let result = 0
	for (let i = 0; i < array.length; i++) {
		if (array[i] !== array[i + 1] && array[i] === array[i + 2]) {
			result = result + 1
		}
	}
	return result
}

test('count boomerange #1', () => {
	expect(countBoomerangs([9, 5, 9, 5, 1, 1, 1])).toEqual(2)
})
test('count boomerange #2', () => {
	expect(countBoomerangs([5, 6, 6, 7, 6, 3, 9])).toEqual(1)
})
test('count boomerange #3', () => {
	expect(countBoomerangs([4, 4, 4, 9, 9, 9, 9])).toEqual(0)
})
test('count boomerange #4', () => {
	expect(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2])).toEqual(3)
})
test('count boomerange #5', () => {
	expect(countBoomerangs([1, 7, 1, 7, 1, 7, 1])).toEqual(5)
})
