//Create a function that takes two dates and returns the number of days between the first and second date.

let retrieveDays = (begDate, endDate) => {
	//1000 milliseconds per minutes * 60 seconds in a minutes * 60 minutes in an hour * 24 hours in a day
	let millisecondsPerDay = 1000 * 60 * 60 * 24
	begDate = new Date(begDate)
	endDate = new Date(endDate)
	let days = (endDate - begDate) / millisecondsPerDay
	return days
}

test('days between dates #1', () => {
	expect(retrieveDays('June 14, 2019', 'June 20, 2019')).toEqual(6)
})

test('days between dates #2', () => {
	expect(retrieveDays('December 29, 2018', 'January 1, 2019')).toEqual(3)
})

test('days between dates #3', () => {
	expect(retrieveDays('July 20, 2019', 'July 30, 2019')).toEqual(10)
})
