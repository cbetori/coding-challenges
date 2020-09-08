/*Write a program that prints the numbers from 0 to 5. 
But for multiples of three print "fizz" instead of the number and for the multiples of five print "buzz". 
For numbers which are multiples of both three and five print "fizzbuzz".*/

let fizzBuzz = (number) => {
	let result = []
	for (let i = 0; i <= number; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			result.push('fizzbuzz')
		} else {
			if (i % 3 === 0) {
				result.push('fizz')
			} else {
				if (i % 5 === 0) {
					result.push('buzz')
				} else {
					result.push(i)
				}
			}
		}
	}
	return result
}

test('fizzbuzz', () => {
	expect(fizzBuzz(5)).toEqual(['fizzbuzz', 1, 2, 'fizz', 4, 'buzz'])
})
