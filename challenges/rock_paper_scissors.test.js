/*Abigail and Benson are playing Rock, Paper, Scissors.
Each game is represented by an array of length 2, where the first element represents what Abigail played and the second element represents what Benson played.
Reuturn the name of the winner if there is a tie return "Tie"
R stands for Rock
P stands for Paper
S stands for Scissors*/

const r_p_s = (array) => {
	if (array[0] === array[1]) {
		return 'Tie'
	} else {
		if (
			(array[0] === 'R' && array[1] === 'S') ||
			(array[0] === 'P' && array[1] === 'R') ||
			(array[0] === 'S' && array[1] === 'P')
		) {
			return 'Abigail'
		} else {
			return 'Benson'
		}
	}
}

test('rock paper scissors #1', () => {
	expect(r_p_s(['R', 'S'])).toEqual('Abigail')
})

test('rock paper scissors #1', () => {
	expect(r_p_s(['R', 'P'])).toEqual('Benson')
})

test('rock paper scissors #3', () => {
	expect(r_p_s(['R', 'R'])).toEqual('Tie')
})
