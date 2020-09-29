/*
Create a function that takes a 5x5 3D array and returns true if it has at least one Bingo, and false if it doesn't.
Only check for diagnols, horizontals and verticals.
*/

const bingo = (array) => {
	if (bingoDiagonal(array) === true) return true
	if (bingoHorizontal(array) === true) return true
	if (bingoVerticle(array) === true) return true
	return false
}

const bingoDiagonal = (array) => {
	let count = 0
	let countDirection
	let firstPosition
	array[0].filter((e, i) => {
		if (e === 'x') {
			firstPosition = i
		}
	})
	if (firstPosition !== 0 && firstPosition !== 4) return false
	if (firstPosition === 0) countDirection = 'positive'
	if (firstPosition === 4) countDirection = 'negative'
	for (let i = 0; i < array.length; i++) {
		for (let x = 0; x < array[i].length; x++) {
			if (x === firstPosition && array[i][x] === 'x') {
				count++
				if (countDirection === 'positive') {
					firstPosition++
				} else {
					firstPosition--
				}
			}
		}
	}
	if (count === 5) return true
	return false
}

const bingoHorizontal = (array) => {
	let count = 0
	for (let i = 0; i < array.length; i++) {
		for (let x = 0; x < array[i].length; x++) {
			if (array[i][x] === 'x') {
				count++
			}
		}
		if (count === 5) return true
		count = 0
	}

	return false
}

const bingoVerticle = (array) => {
	let count = 0
	let firstPosition
	array[0].filter((e, i) => {
		if (e === 'x') {
			firstPosition = i
		}
	})
	for (let i = 0; i < array.length; i++) {
		for (let x = 0; x < array[i].length; x++) {
			if (x === firstPosition && array[i][x] === 'x') {
				count++
			}
		}
	}
	if (count === 5) return true
	return false
}

test('bing #1', () => {
	expect(
		bingo([
			[45, 'x', 31, 74, 87],
			[64, 'x', 47, 32, 90],
			[37, 'x', 68, 83, 54],
			[67, 'x', 98, 39, 44],
			[21, 'x', 24, 30, 52],
		])
	).toEqual(true)
})
test('bing #2', () => {
	expect(
		bingo([
			['x', 43, 31, 74, 87],
			[64, 'x', 47, 32, 90],
			[37, 65, 'x', 83, 54],
			[67, 98, 39, 'x', 44],
			[21, 59, 24, 30, 'x'],
		])
	).toEqual(true)
})
test('bing #3', () => {
	expect(
		bingo([
			['x', 'x', 'x', 'x', 'x'],
			[64, 12, 47, 32, 90],
			[37, 16, 68, 83, 54],
			[67, 19, 98, 39, 44],
			[21, 75, 24, 30, 52],
		])
	).toEqual(true)
})
test('bing #4', () => {
	expect(
		bingo([
			[45, 'x', 31, 74, 87],
			[64, 78, 47, 'x', 90],
			[37, 'x', 68, 83, 54],
			[67, 'x', 98, 'x', 44],
			[21, 'x', 24, 30, 52],
		])
	).toEqual(false)
})

test('bing #5', () => {
	expect(
		bingo([
			[43, 31, 74, 87, 'x'],
			[64, 47, 32, 'x', 90],
			[37, 65, 'x', 83, 54],
			[67, 'x', 39, 44, 10],
			['x', 21, 59, 24, 30],
		])
	).toEqual(true)
})
