/*Given any number, we can create a new number by adding the sums of squares of digits of that number. 
For example, given 203, our new number is 4 + 0 + 9 = 13. 
The only numbers passed to your function will be positive whole numbers.
You can assume (and it is actually true!) that all positive whole numbers are either happy or unhappy. 
Any happy number will have a 1 in its sequence, and every unhappy number will have a 4 in its sequence.
*/

const happyNumbers = (number) => {
	while (number !== 1) {
		number = sumSquaredDigits(number)
		if (number === 4) break
	}
	return number === 1 ? true : false
}

const sumSquaredDigits = (number) => {
	console.log(number)
	const numString = number.toString()
	let numTotal = 0
	for (let i = 0; i < numString.length; i++) {
		numTotal = parseInt(numString[i]) * parseInt(numString[i]) + numTotal
	}
	return numTotal
}

test('happy numbers #1', () => {
	expect(happyNumbers(203)).toEqual(true)
})

test('happy numbers #2', () => {
	expect(happyNumbers(11)).toEqual(false)
})

test('happy numbers #3', () => {
	expect(happyNumbers(107)).toEqual(false)
})
