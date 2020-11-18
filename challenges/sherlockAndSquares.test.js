/*
Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value describing a range of integers. 
Sherlock must determine the number of square integers within that range, inclusive of the endpoints (note that a square integer is an integer 
which is the square of an integer, e.g. 1, 4, 9, 16, 25, 36, 49).

For example, the range is a=24 and b=49, inclusive. There are three square integers in the range: 25, 36 and 49.

Complete the squares function that returns an integer representing the number of square integers in the inclusive range from a to b.
*/

const countSquares = (s, e) => {
	let count = 0
	let check = 1
	while (check <= e) {
		if (check >= s && check <= e) {
			count++
		}
		check = Math.floor(Math.sqrt(check)) + 1
		check = check * check
	}
	return count
}

test('sherlock and squares #1', () => {
	expect(countSquares(3, 9)).toEqual(2)
})
test('sherlock and squares #2', () => {
	expect(countSquares(17, 24)).toEqual(0)
})
test('sherlock and squares #3', () => {
	expect(countSquares(1, 1000000000)).toEqual(31622)
})
