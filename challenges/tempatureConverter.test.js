/*Create a function that converts Celcius to Fahrenheit and vice versa.
Round to the nearest integer.
If the input is incorrect, return "Error".
For the formulae to convert back and forth, check the Resources tab. */

const tempConverter = (temp) => {
	let result
	let tempMetric = temp[temp.length - 1]
	let tempNumber = Math.round(temp.slice(0, -2))
	if (tempMetric === 'C') {
		result = tempNumber + 32
		return result + '°F'
	} else {
		if (tempMetric === 'F') {
			result = tempNumber - 32
			return result + '°C'
		} else {
			return 'Error'
		}
	}
}

test('tempature converter #1', () => {
	expect(tempConverter('32°F')).toEqual('0°C')
})

test('tempature converter #2', () => {
	expect(tempConverter('0°C')).toEqual('32°F')
})

test('tempature converter #3', () => {
	expect(tempConverter('0°')).toEqual('Error')
})

test('tempature converter #4', () => {
	expect(tempConverter('32.7°F')).toEqual('1°C')
})
