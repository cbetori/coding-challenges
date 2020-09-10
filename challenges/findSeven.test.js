//Write a function that takes in a number and finds if the number 7 exists.
//Write a function that does the same thing that doesnt convert the number into a string.
//Ex: 57 result 1

const findSevenString = (number) => {
	let result = 0
	number = number.toString()
	for (let i = 0; i < number.length; i++) {
		if (number[i] === '7') {
			result = result + 1
		}
	}
	return result
}

const findSevenInt = (number) => {
	let result = 0
	let num
	for (let i = 0; i < number; i++) {
		num = number % 10
		if (num === 7) {
			result = result + 1
		}
		number = parseInt(number / 10)
	}
	return result
}

test('find seven string', () => {
	expect(findSevenString(576437)).toEqual(2)
})

test('find seven int', () => {
	expect(findSevenInt(576437)).toEqual(2)
})
