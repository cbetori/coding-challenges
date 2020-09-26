/*
Time to call your lover to inform what he/she lost in the burglary.

Given an object of the stolen objects, return the 3rd most expensive item on the list. 
If that is not possible, because there are not enough items, return false.
*/

const thirdMostExpensive = (obj) => {
	const costArray = Object.entries(obj)
	if (costArray.length < 3) return false
	const orderedArray = costArray.sort((a, b) => b[1] - a[1])
	return orderedArray[2][0]
}

test('third most expense #1', () => {
	expect(thirdMostExpensive({})).toEqual(false)
})

test('third most expense #2', () => {
	expect(thirdMostExpensive({ piano: 100, tv: 200 })).toEqual(false)
})

test('third most expense #3', () => {
	expect(thirdMostExpensive({ piano: 400, tv: 300, stereo: 200 })).toEqual(
		'stereo'
	)
})

test('third most expense #4', () => {
	expect(
		thirdMostExpensive({ piano: 1000, tv: 500, ball: 10, mirror: 200 })
	).toEqual('mirror')
})
