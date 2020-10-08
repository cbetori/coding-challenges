/*
Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. 
A grocery object has a product, a quantity and a price, for example:
{
  "product": "Milk",
  "quantity": 1,
  "price": 1.50
}
There might be a floating point precision problem in here...
*/


const groceryPrice=(array)=>{
    let result = 0
    for(let i=0;i<array.length; i++){
        result = array[i].price * array[i].quantity + result
    }
    result = parseFloat(result).toFixed(2)
    return parseFloat(result)
}

test('grocery price #1', ()=>{
    expect(groceryPrice([
        { product: "Milk", quantity: 1, price: 1.50 }
      ])).toEqual(1.5)
})
test('grocery price #2', ()=>{
    expect(groceryPrice([
        { product: "Milk", quantity: 1, price: 1.50 },
        { product: "Cereals", quantity: 1, price: 2.50 }
      ])).toEqual(4)
})
test('grocery price #3', ()=>{
    expect(groceryPrice([
        { product: "Milk", quantity: 3, price: 1.50 }
      ])).toEqual(4.5)
})
test('grocery price #4', ()=>{
    expect(groceryPrice([
        { product: "Milk", quantity: 1, price: 1.50 },
        { product: "Eggs", quantity: 12, price: 0.10 },
        { product: "Bread", quantity: 2, price: 1.60 },
        { product: "Cheese", quantity: 1, price: 4.50 }
      ])).toEqual(10.4)
})
test('grocery price #5', ()=>{
    expect(groceryPrice([
        { product: "Chocolate", quantity: 1, price: 0.10 },
        { product: "Lollipop", quantity: 1, price: 0.20 }
      ])).toEqual(.3)
})