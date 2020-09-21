/*Arun is obsessed with primes, especially five. 
He considers a number to be luckiest if it has the highest number of five in it. 
If two numbers have the same frequency of five, Arun considers the larger of them to be luckiest, 
and if there is no five in any number, the first given number is considered luckiest. 
Help him choose the luckiest number. 
Return null if given an empty array.*/

const findLargestFive = (array) => {
	//if array is empty return null
	if (array.length === 0) return null
	//this returns and array of object. the object holds the number and the frequency of the number 5
	let arrayOfFives = createObjectWithFives(array)
	//if the array we recieve is empty we return the first value of the recieved array
	if (arrayOfFives.length === 0) return array[0]
	let highestFrequency = findHighestFrequency(arrayOfFives)
	let filteredArray = arrayOfFives.filter(
		(obj) => obj.frequency === highestFrequency
	)
	//if there is only one value in the filtered array we return that numbers
	if (filteredArray.length === 1) return filteredArray[0]['number']
	//if there are mulitple results with the same frequency of fives we return the largest number
	let result = filteredArray.sort((item1, item2) => item2.number - item1.number)
	return result[0]['number']
}

//Creates and object that finds numbers with 5 and gets the frequency of the number 5
const createObjectWithFives = (array) => {
	let result = []
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 5 === 0 && array[i] % 10 !== 0) {
			let numString = array[i].toString()
			let frequency = 0
			for (let x = 0; x < numString.length; x++) {
				if (numString[x] === '5') {
					frequency++
				}
			}
			result.push({ number: array[i], frequency: frequency })
		}
	}
	return result
}

const findHighestFrequency = (array) => {
	let highestFrequency = 0
	for (let i = 0; i < array.length; i++) {
		if (highestFrequency < array[i].frequency) {
			highestFrequency = array[i].frequency
		}
	}
	return highestFrequency
}

test('find largest five #1', () => {
	expect(findLargestFive([5, 12, 55, 11])).toEqual(55)
})

test('find largest five #2', () => {
	expect(findLargestFive([55, 12, -555, 11])).toEqual(-555)
})

test('find largest five #3', () => {
	expect(findLargestFive([515, 1255, -55, 1])).toEqual(1255)
})

test('find largest five #4', () => {
	expect(findLargestFive([44, 12, 7, 40])).toEqual(44)
})

test('find largest five #5', () => {
	expect(findLargestFive([])).toEqual(null)
})
