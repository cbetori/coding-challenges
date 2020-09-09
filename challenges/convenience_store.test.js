/*Given a total due and an array representing the amount of change in your pocket, 
determine whether or not you are able to pay for the item. 
Change will always be represented in the following order: quarters, dimes, nickels, pennies.*/

let changeEnough = (change, total) => {
	let q = change[0] * 0.25
	let d = change[1] * 0.1
	let n = change[2] * 0.05
	let p = change[3] * 0.01
	return (result = q + d + n + p >= total ? true : false)
}

test('convenience store #1', () => {
	expect(changeEnough([2, 100, 0, 0], 14.11)).toEqual(false)
})

test('convenience store #2', () => {
	expect(changeEnough([0, 0, 20, 5], 0.75)).toEqual(true)
})

test('convenience store #3', () => {
	expect(changeEnough([10, 0, 0, 50], 3.85)).toEqual(false)
})

test('convenience store #4', () => {
	expect(changeEnough([1, 0, 5, 219], 19.99)).toEqual(false)
})

test('convenience store #5', () => {
	expect(changeEnough([30, 40, 20, 5], 12.55)).toEqual(true)
})
