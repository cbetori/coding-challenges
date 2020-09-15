/*Create a function that decomposes an address string (string format is consistent) into an object of five substrings:
{
street_number: ""
street_name: ""
city_name: ""
state: ""
zip_code: ""
}
string ex: "557 Farmer Rd Corner, MT 59105"
*/

//In a full application you would want a full list of all possible street names
//This lets us know when the street name ends and the city name begins
const streetAbbreviations = [
	'ALY',
	'AVE',
	'BLVD',
	'BRG',
	'CIR',
	'RD',
	'CT',
	'ST',
]

const decomposeAddress = (string) => {
	let array = string.split(' ')
	let result = {
		street_number: array[0],
		state: array[array.length - 2],
		zip_code: array[array.length - 1],
	}
	let currentString = ''
	for (let i = 1; i < array.length - 1; i++) {
		currentString = currentString + ' ' + array[i]
		if (currentString[currentString.length - 1] === ',') {
			currentString = currentString.slice(0, -1)
			result.city_name = currentString.trim()
			currentString = ''
		}
		for (let x = 0; x < streetAbbreviations.length; x++) {
			if (array[i].toUpperCase() === streetAbbreviations[x]) {
				result.street_name = currentString.trim()
				currentString = ''
			}
		}
	}
	return result
}

test('decompose address #1', () => {
	expect(decomposeAddress('557 Farmer Rd Corner, MT 59105')).toEqual({
		street_number: '557',
		street_name: 'Farmer Rd',
		city_name: 'Corner',
		state: 'MT',
		zip_code: '59105',
	})
})

test('decompose address #2', () => {
	expect(decomposeAddress('3315 Vanity St Beverly Hills, CA 90210')).toEqual({
		street_number: '3315',
		street_name: 'Vanity St',
		city_name: 'Beverly Hills',
		state: 'CA',
		zip_code: '90210',
	})
})

test('decompose address #3', () => {
	expect(decomposeAddress('8919 Scarecrow Ct Idaho Falls, ID 80193')).toEqual({
		street_number: '8919',
		street_name: 'Scarecrow Ct',
		city_name: 'Idaho Falls',
		state: 'ID',
		zip_code: '80193',
	})
})
