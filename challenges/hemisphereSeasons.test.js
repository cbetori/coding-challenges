// In this challenge, you are given a date and you have to determine the correspondent season in a certain hemisphere of Earth.

// You have to use the ranges given by the meteorological seasons definition, accordingly to the following table:

// Start	End	North Hemisphere	South Hemisphere
// March, 1	May, 31	Spring	Autumn
// June, 1	August, 31	Summer	Winter
// September, 1	November, 30	Autumn	Spring
// December, 1	February, 28***	Winter	Summer
// Given two strings hemisphere (can be "N" for the North hemisphere or "S" for the South hemisphere) and
// date (name and day of the month), implement a function that returns a string with the season name, accordingly to the above table.
// During leap years the end date of Winter in the northern hemisphere is the 29th day of February
// (last day of Summer in the southern hemisphere). In this challenge, years are not used, so the last day of February will
// always be the 28th.

const dateTable = {
	January: { N: 'Winter', S: 'Summer' },
	February: { N: 'Winter', S: 'Summer' },
	March: { N: 'Spring', S: 'Autumn' },
	April: { N: 'Spring', S: 'Autumn' },
	May: { N: 'Spring', S: 'Autumn' },
	June: { N: 'Summer', S: 'Winter' },
	July: { N: 'Summer', S: 'Winter' },
	August: { N: 'Summer', S: 'Winter' },
	September: { N: 'Autumn', S: 'Spring' },
	October: { N: 'Autumn', S: 'Spring' },
	November: { N: 'Autumn', S: 'Spring' },
	December: { N: 'Winter', S: 'Summer' },
}

const hemisphereSeason = (h, date) => {
	let [month] = date.split(',')
	return dateTable[month][h]
}

test('hempisphere season #1', () => {
	expect(hemisphereSeason('N', 'June, 30')).toEqual('Summer')
})

test('hempisphere season #2', () => {
	expect(hemisphereSeason('N', 'March, 1')).toEqual('Spring')
})

test('hempisphere season #3', () => {
	expect(hemisphereSeason('S', 'September, 22')).toEqual('Spring')
})
