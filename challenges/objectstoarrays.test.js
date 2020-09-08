/*Write a function that converts an object into an array, where each element represents a key-value pair.*/

let objToArray = (obj) => {
	let result = []
	for (let element in obj) {
		let innerArray = []
		innerArray.push(element)
		innerArray.push(obj[element])
		result.push(innerArray)
	}
	return result
}

let objToArray2 = (obj) => {
	let arrayOfKeys = Object.keys(obj)
	let result = arrayOfKeys.map((e) => [e, obj[e]])
	return result
}

test('object to array #1', () => {
	expect(
		objToArray({ name: 'Lou', animal: 'dog', age: 5, weight: 30 })
	).toEqual([
		['name', 'Lou'],
		['animal', 'dog'],
		['age', 5],
		['weight', 30],
	])
})

test('object to array #2', () => {
	expect(
		objToArray2({ name: 'Lou', animal: 'dog', age: 5, weight: 30 })
	).toEqual([
		['name', 'Lou'],
		['animal', 'dog'],
		['age', 5],
		['weight', 30],
	])
})
