/*This robot roams around a 2D grid. It starts at (0, 0) facing North. 
After each time it moves, the robot rotates 90 degrees clockwise. Given the amount the robot has moved each time, 
you have to calculate the robot's final position.

To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:
20 steps North, now at (0, 20)
30 steps East, now at (30, 20)
10 steps South. now at (30, 10)
40 steps West, now at (-10, 10)
...and will end up at coordinates (-10, 10).*/

const trackRobot = (array) => {
	let result = [0, 0]
	let moveCount = 0

	for (let i = 0; i < array.length; i++) {
		if (moveCount === 0 || moveCount === 2) {
			let multiplier = moveCount === 0 ? 1 : -1
			result[1] = array[i] * multiplier + result[1]
		} else {
			let multiplier = moveCount === 1 ? 1 : -1
			result[0] = array[i] * multiplier + result[0]
		}
		moveCount++
		moveCount = moveCount > 3 ? 0 : moveCount
	}
	return result
}

test('track the robot', () => {
	expect(trackRobot([20, 30, 10, 40])).toEqual([-10, 10])
})
