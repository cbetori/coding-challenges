//Write a function that inserts a white space between every instance of a
//lower character followed immediately by an upper character.
//Each word in the phrase will be at least two characters long.

const insertWhiteSpace = (string) => {
	let result = []
	let stringStart = 0
	let stringEnd = string.length
	for (let i = 0; i < string.length; i++) {
		if (
			i > 0 &&
			string[i] === string[i].toUpperCase() &&
			string[i - 1] === string[i - 1].toLowerCase()
		) {
			result.push(string.slice(stringStart, i))
			stringStart = i
		}
	}
	result.push(string.slice(stringStart, stringEnd))

	return result.join(' ')
}

test('white space #1', () => {
	expect(insertWhiteSpace('SheWalksToTheBeach')).toEqual(
		'She Walks To The Beach'
	)
})

test('white space #2', () => {
	expect(insertWhiteSpace('MarvinTalksTooMuch')).toEqual(
		'Marvin Talks Too Much'
	)
})

test('white space #3', () => {
	expect(insertWhiteSpace('TheGreatestUpsetInHistory')).toEqual(
		'The Greatest Upset In History'
	)
})
