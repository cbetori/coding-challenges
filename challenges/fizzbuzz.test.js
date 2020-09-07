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
