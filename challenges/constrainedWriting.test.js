/*
In this challenge, establish which type of constrained writing is applied to a sentence. There are four possible types to detect:
Pangram: the sentence contains all the 26 letters of the English alphabet.
Heterogram: the sentence doesn't have multiple instances of its letters (as to say that every letter is unique).
Tautogram: every word of the sentence starts with the same letter.
Transgram: all words of the sentence share at least a common letter.
Given a string txt being a sentence, implement a function that returns the strings "Pangram", "Heterogram", "Tautogram" or "Transgram" accordingly to the above definitions and following the same given order to establish the result. 
If no constrained writing is detected, return the string "Sentence".
*/

const constrained = (string) => {
	if (pangram(string) === true) return 'Panagram'
	if (heterogram(string) === true) return 'Heterogram'
	if (tautogram(string) === true) return 'Tautogram'
	if (transgram(string) === true) return 'Transgram'
	return 'Sentence'
}

const pangram = (string) => {
	string = string.replace(/[ .,?!//\/]/g, '')
	string = string.replace(/[0-9]/g, '')
	let array = string.split('')
	array = array.map((e) => e.toUpperCase())
	array = [...new Set(array)]
	if (array.length === 26) return true
	return false
}

const heterogram = (string) => {
	string = string.replace(/[ .,?!//\/]/g, '')
	string = string.replace(/[0-9]/g, '')
	let array = string.split('')
	array = array.map((e) => e.toUpperCase())
	let testArray = [...new Set(array)]
	if (array.length === testArray.length) return true
	return false
}

const tautogram = (string) => {
	let startingLetter = []
	let array = string.split(' ')
	for (let i = 0; i < array.length; i++) {
		startingLetter.push(array[i][0].toUpperCase())
	}
	startingLetter = [...new Set(startingLetter)]

	if (startingLetter.length === 1) return true
	return false
}

const transgram = (string) => {}

test('constrained writing #1', () => {
	expect(constrained('The quick brown fox jumps over the lazy dog.')).toEqual(
		'Panagram'
	)
})

test('constrained writing #2', () => {
	expect(constrained('The big dwarf only jumps.')).toEqual('Heterogram')
})

test('constrained writing #3', () => {
	expect(constrained('Todd told Tom to take the tiny turtles.')).toEqual(
		'Tautogram'
	)
})

test('constrained writing #4', () => {
	expect(
		constrained('A cannibal alligator has attacked an unaware vegan alligator.')
	).toEqual('Transgram')
})

test('constrained writing #5', () => {
	expect(constrained('The unbearable lightness of coding...')).toEqual(
		'Sentence'
	)
})
