/*
Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. 
However, he has little knowledge of how to choose a good bottle. 
Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. 
In any selection of two or more wines, he will always buy the second-cheapest.

Given an array of wine objects, write a function that returns the name of the wine he will buy for the party. 
If given an empty array, return null. If given an array of only one, Atticus will buy that wine.

All wines will be different prices, so there is no confusion in the ordering.
*/

const wineSelector = (arr) => {
	if (arr.length === 0) return null
	if (arr.length === 1) return arr[0].name
	const orderedArr = arr.sort((a, b) => b.price - a.price)
	return orderedArr[orderedArr.length - 2].name
}

test('frugal gentleman #1', () => {
	expect(
		wineSelector([
			{ name: 'Wine A', price: 8.99 },
			{ name: 'Wine 32', price: 13.99 },
			{ name: 'Wine 9', price: 10.99 },
		])
	).toEqual('Wine 9')
})

test('frugal gentleman #2', () => {
	expect(wineSelector([{ name: 'Wine A', price: 8.99 }])).toEqual('Wine A')
})

test('frugal gentleman #3', () => {
	expect(wineSelector([])).toEqual(null)
})

test('frugal gentleman #4', () => {
	expect(
		wineSelector([
			{ name: 'Wine A', price: 8.99 },
			{ name: 'Wine 32', price: 13.99 },
			{ name: 'Wine 9', price: 10.99 },
			{ name: 'Wine 7', price: 12.99 },
			{ name: 'Wine 11', price: 11.99 },
			{ name: 'Wine 14', price: 6.99 },
			{ name: 'Wine 19', price: 7.99 },
		])
	).toEqual('Wine 19')
})
