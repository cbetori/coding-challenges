/*
A perfect number is a number that is equal to the sum of all its proper (non-self) divisors. Take 6 for example:

6 = 1 + 2 + 3
A number that is equal to the sum of all its proper divisors -- provided that one of them is negative -- is not quite perfect, but admirable.

To illustrate. The proper divisors of 12 are 1, 2, 3, 4, 6, totalling 16. 
However, if 2 is negative, the total would be 12, the number itself. 12 is therefore an admirable number.

Create a function that takes a number n as input.
1. If n is perfect, return "Perfect".
2. If n is admirable, return the proper divisor that must be rendered negative to make the sum of the proper divisors equal to n.
3. If n is neither perfect nor admirable, return "Neither".
*/

const perfectNumber=(number)=>{
    let divisors = []
    for(let i=0; i<number; i++){
        if(number % i !== 0) continue
        divisors.push(i)
    }
    if(divisors.reduce((a,b)=> a + b) === number) return 'Perfect'
    for(let i=0;i<divisors.length; i++){
        let admirable = divisors[i]*-1
        for(let x=0;x<divisors.length; x++){
            if(x === i) continue
            admirable = admirable + divisors[x]
        }
        if(admirable === number) return divisors[i]
    }
    return 'Neither'
}

test('perfect number #1',()=>{
    expect(perfectNumber(6)).toEqual('Perfect')
})
test('perfect number #2',()=>{
    expect(perfectNumber(12)).toEqual(2)
})
test('perfect number #1',()=>{
    expect(perfectNumber(18)).toEqual('Neither')
})