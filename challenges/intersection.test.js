/*Have the function read the array of strings which will contain 2 elements: 
the first element will represent a list of comma-separated numbers sorted in ascending order, 
the second element will represent a second list of comma-separated numbers (also sorted). 
Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. 
If there is no intersection, return the string false.*/

let intersection = (array) => {
	let result = ''
	const arr1 = array[0].split(',')
	const arr2 = array[1].split(',')
	for (let i = 0; i < arr1.length; i++) {
		for (let x = 0; x < arr2.length; x++) {
			if (arr1[i] === arr2[x]) {
				if (result === '') {
					result = result + arr1[i]
				} else {
					result = result + ',' + arr1[i].trim()
				}
				break
			}
		}
	}
	result = result !== '' ? result : false
	return result
}

test('intesection-true', () => {
	expect(intersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15'])).toEqual('1,4,13')
})
test('intesection-false', () => {
	expect(intersection(['1, 2, 3, 4', '5, 6, 7, 8'])).toEqual(false)
})
