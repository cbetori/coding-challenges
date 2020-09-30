/*
A spoonerism is when the first letters / sounds of two words are transposed onto one another. 
Create a function that takes a two-word string and performs a spoonerism on the phrase.

Only two words will be parsed into the function. Don't worry about handling more than two.
You won't always just have to swap the first letters, take care to notice which letters have been switched in the examples 
(notice the difference between vowel-starting and consonant-starting words).
*/

const vowels = ['a', 'e', 'i', 'o', 'u']

const spoonerise = (string) => {
	let stringArray = string.split(' ')
	let firstWordStart = ''
	let firstWordEnd = ''
	let secondWordStart = ''
	let secondWordEnd = ''
	for (let i = 0; i < stringArray.length; i++) {
		for (let x = 0; x < stringArray[i].length; x++) {
			for (let v = 0; v < vowels.length; v++) {
				if (stringArray[i][x] === vowels[v]) {
					if (i === 0) {
						if (x === 0) {
							firstWordStart = ''
							firstWordEnd = stringArray[i]
						} else {
							firstWordStart = stringArray[i].slice(0, x)
							firstWordEnd = stringArray[i].slice(x, stringArray[i].length)
						}
						break
					} else {
						if (x === 0) {
							secondWordStart = ''
							secondWordEnd = stringArray[i]
						} else {
							secondWordStart = stringArray[i].slice(0, x)
							secondWordEnd = stringArray[i].slice(x, stringArray[i].length)
						}
						break
					}
				}
			}
			if (firstWordEnd !== '' && i === 0) break
			if (secondWordEnd !== '' && i === 1) break
		}
	}
	return secondWordStart + firstWordEnd + ' ' + firstWordStart + secondWordEnd
}

test('spoonerisms #1', () => {
	expect(spoonerise('history lecture')).toEqual('listory hecture')
})
test('spoonerisms #2', () => {
	expect(spoonerise('loud noises')).toEqual('noud loises')
})
test('spoonerisms #3', () => {
	expect(spoonerise('chow mein')).toEqual('mow chein')
})
test('spoonerisms #4', () => {
	expect(spoonerise('edabit rules!')).toEqual('redabit ules!')
})

// let x = spoonerise('edabit rules!')

// console.log(x)
