/*Write a program that orders an array of numbers from smallest to largest. 
All numbers in the array should be unique.*/

let sortArrayOfNumbers = (array) => {
	let result = []
	for (let i = 0; i < array.length; i++) {
		let check = false
		for (let x = 0; x < result.length; x++) {
			if (array[i] === result[x]) {
				check = true
				break
			}
			if (array[i] < result[x]) {
				result.splice(x, 0, array[i])
				check = true
				break
			}
		}
		if (check === false) {
			result.push(array[i])
		}
	}
	return result
}

test('sorting', () => {
	expect(sortArrayOfNumbers([5, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
})
