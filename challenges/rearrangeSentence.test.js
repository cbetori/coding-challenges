/*
Given a sentence with numbers representing a word's location embedded within each word, return the sorted sentence.
Only the integers 1-9 will be used.
*/

const reArrange = (string) => {
	let cleanArray = []
	let stringArray = string.split(' ')
	for (let i = 0; i < stringArray.length; i++) {
		let cleanString = ''
		let index = 0
		for (let x = 0; x < stringArray[i].length; x++) {
			if (isNaN(parseInt(stringArray[i][x]))) {
				cleanString = cleanString + stringArray[i][x]
			} else {
				index = parseInt(stringArray[i][x])
			}
		}
		cleanArray[index] = cleanString.trim()
	}
	cleanArray.shift()
	return cleanArray.join(' ')
}

test('rearrange the sentence #1', () => {
	expect(reArrange('is2 Thi1s T4est 3a')).toEqual('This is a Test')
})
test('rearrange the sentence #2', () => {
	expect(reArrange('4of Fo1r pe6ople g3ood th5e the2')).toEqual(
		'For the good of the people'
	)
})
test('rearrange the sentence #3', () => {
	expect(reArrange(' ')).toEqual('')
})
