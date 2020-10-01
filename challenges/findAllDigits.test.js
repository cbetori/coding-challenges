/*
Taking each four digit number of an array in turn, 
return the number that you are on when all of the digits 0-9 have been discovered. 
If not all of the digits can be found, return "Missing digits!".
*/

const digits = {
	0: false,
	1: false,
	2: false,
	3: false,
	4: false,
	5: false,
	6: false,
	7: false,
	8: false,
	9: false,
}

const findAllDigits = (array) => {
	let tempDigits = { ...digits }
	let count = 0
	for (let i = 0; i < array.length; i++) {
		let strNum = array[i].toString()
		for (let x = 0; x < strNum.length; x++) {
			if (tempDigits[parseInt(strNum[x])] === false) {
				tempDigits[parseInt(strNum[x])] = true
				count++
				if (count === 10) return array[i]
			}
		}
	}
	return 'Missing digits!'
}

test('find all digits #1', () => {
	expect(
		findAllDigits([5175, 4538, 2926, 5057, 6401, 4376, 2280, 6137, 8798, 9083])
	).toEqual(5057)
})

test('find all digits #2', () => {
	expect(
		findAllDigits([5719, 7218, 3989, 8161, 2676, 3847, 6896, 3370, 2363, 1381])
	).toEqual(3370)
})

test('find all digits #3', () => {
	expect(
		findAllDigits([4883, 3876, 7769, 9846, 9546, 9634, 9696, 2832, 6822, 6868])
	).toEqual('Missing digits!')
})
