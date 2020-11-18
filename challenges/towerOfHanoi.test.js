/*
There are three towers. 
The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk. 
- The amount of discs is always a positive integer.
- 1 disc can be changed per move.
*/

const towers = (int) => {
	return Math.pow(2, int) - 1
}

test('towers of hanoi #1', () => {
	expect(towers(3)).toEqual(7)
})
test('towers of hanoi #2', () => {
	expect(towers(5)).toEqual(31)
})
test('towers of hanoi #1', () => {
	expect(towers(0)).toEqual(0)
})
