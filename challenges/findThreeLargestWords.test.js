/*Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. 
Words should be returned in an array in order from longest to shortest
If multiple words tie for the same length, retrieve the word that occurs first.
If the title is less than 3 words, just order the words in the title by length in descending order (see example #4).
Punctuation does not count towards a word's length. */

/*
Requirements:
    1. Write a function that accepts a string
    2. Return the three longest words in the string in an array
        a. if multiple words have the same length retrieve te word that occurs first
            (Should all of the words have different lengths? I would assume not)
    3. If the string has less than three words order them by word length
    4. Include a "#" before the word and lowercase the word
*/

const threeLongestWords = (string) => {
	let updatedString = cleanString(string)
	let stringArray = updatedString.split(' ')
	let orderedArray = orderArray(stringArray)
	if (orderedArray.length < 3) return orderedArray
	return [orderedArray[0], orderedArray[1], orderedArray[2]]
}

const cleanString = (string) => {
	//include any characters you want removed in varaible badCharacters
	const badCharacters = [',', '.']
	for (let i = 0; i < string.length; i++) {
		for (let x = 0; x < badCharacters.length; x++) {
			if (string[i] === badCharacters[x]) {
				string = string.replace(badCharacters[x], '')
			}
		}
	}
	return string
}

const orderArray = (array) => {
	let result = []
	let longestString = 0
	for (let i = 0; i < array.length; i++) {
		longestString =
			array[i].length > longestString ? array[i].length : longestString
	}
	for (let x = longestString; x > 0; x--) {
		for (let i = 0; i < array.length; i++) {
			if (array[i].length === x) {
				result.push('#' + array[i].toLowerCase())
			}
		}
	}
	return result
}

test('three longest words #1', () => {
	expect(
		threeLongestWords('How the Avocado Became the Fruit of the Global Trade.')
	).toEqual(['#avocado', '#became', '#global'])
})

test('three longest words #2', () => {
	expect(
		threeLongestWords(
			'Why You Will Probably Pay More for Your Christmas Tree This Year'
		)
	).toEqual(['#christmas', '#probably', '#will'])
})

test('three longest words #3', () => {
	expect(
		threeLongestWords('Hey Parents, Surprise, Fruit Juice Is Not Fruit')
	).toEqual(['#surprise', '#parents', '#fruit'])
})

test('three longest words #4', () => {
	expect(threeLongestWords('Visualizing Science')).toEqual([
		'#visualizing',
		'#science',
	])
})
