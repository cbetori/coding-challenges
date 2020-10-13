/*
Harry is a postman. He's got a post office with a size of n*m(a matrix / 2D array). 
Each slot at the 2D array represents the number of letters in that spot. Harry can only go right and down. 
He starts at (0, 0), and ends at (n-1, m-1). n represents the height, and m the length. 
Return the maximum amount of letters he can pick up. He can only pick up letters if he is on that spot.
If the matrix is empty, return -1.
*/


const twoDArrray=(array)=>{
    if(array.length === 0) return -1
    let result = 0
    for(let i =0; i <array.length; i++){
        for(let x =0; x <array[i].length; x++){
            if(x === 0) result = result + array[i][x]
            if(i === array.length-1 && x !==0) result = result + array[i][x]
        }
    }
    return result
}

test('two dimensional array #1', ()=>{
    expect(twoDArrray([[5, 2], [5, 2]])).toEqual(12)
})

test('two dimensional array #2', ()=>{
    expect(twoDArrray([
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15]
      ])).toEqual(72)
})

test('two dimensional array #3', ()=>{
    expect(twoDArrray([])).toEqual(-1)
})