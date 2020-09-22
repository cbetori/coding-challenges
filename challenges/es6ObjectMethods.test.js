/*In ES6 JavaScript, there exist two Object methods:

Object.prototype.entries() takes a single object as an argument, and returns an array. 
In this array are arrays with the name of every property of the object, and the value of the property.
Object.prototype.values() also takes a single object as an argument, and returns an array. 
In this array are the values of every property of the object.

Example: 
const myObject = {
    a: 1,
    b: 2
  }
  
  Object.entries(myObject) ➞ [ ["a", 1], ["b", 2] ]
  Object.values(myObject) ➞ [1, 2]

  The methods you create should return the same values as Object.prototype.entries() and Object.prototype.values(), and should adhere to ES5 limits. 
  If the object has no properties your methods should return an empty array.
  */

/* 
  Requirements objEntries:
    1. Create function that takes in an object
    2. Return an array of arrays with the inner arrays first value representing the key and the second value representing the key value
    3. If the object is empty return an empty array
  */

/* 
  Requirements objValues:
    1. Create function that takes in an object
    2. Return an array of objects key values
    3. If the object is empty return an empty array
  */

const objEntries = (obj) => {
	const result = []
	if (Object.keys(obj).length === 0) return result
	for (let element in obj) {
		result.push([element, obj[element]])
	}
	return result
}

const objValues = (obj) => {
	const result = []
	if (Object.keys(obj).length === 0) return result
	for (let element in obj) {
		result.push(obj[element])
	}
	return result
}

test('es6 object methods #1', () => {
	expect(objEntries({ a: 1, b: 2 })).toEqual([
		['a', 1],
		['b', 2],
	])
})

test('es6 object methods #2', () => {
	expect(objEntries({})).toEqual([])
})

test('es6 object methods #1', () => {
	expect(objValues({ a: 1, b: 2 })).toEqual([1, 2])
})

test('es6 object methods #4', () => {
	expect(objValues({})).toEqual([])
})
