/*Write the function that takes three dimensions of a brick: 
height(a), width(b) and depth(c) and returns true if this brick can fit into a hole with the width(w) and height(h).
You can turn the brick with any side towards the hole.
We assume that the brick fits if its sizes equal the ones of the hole (i.e. brick size should be less than or equal to the size of the hole, not strickly less).
You can't put a brick in at a non-orthogonal angle.*/

function doesBrickFit(a, b, c, w, h) {
	//sort the numbers and retrieve just the two smallest numbers
	const [min, max] = [a, b, c].sort((d1, d2) => d1 - d2)
	//compare smallest brick dimensions to hole dimensions
	return (min <= w && max <= h) || (min <= h && max <= w)
}

test('does brick fit #1', () => {
	expect(doesBrickFit(1, 1, 1, 1, 1)).toEqual(true)
})

test('does brick fit #2', () => {
	expect(doesBrickFit(1, 2, 1, 1, 1)).toEqual(true)
})

test('does brick fit #3', () => {
	expect(doesBrickFit(1, 2, 2, 1, 1)).toEqual(false)
})
