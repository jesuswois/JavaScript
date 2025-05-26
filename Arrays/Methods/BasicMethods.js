
// Basic Array Methods

console.log("Basic Array Methods")
console.log("")
const array1 = ["Bob","Josh","Howard","Amber","Rob"] 
const array2 = [1,2,3,4,5]

/* .toString()
-Returns all of the array elements as an unique string (independently of his datatype.), separated by comma.
*/
console.log("toString(): "+array1.toString())
console.log("")

/* .at(data:number)
-Returns the element at the specified index
*/
console.log("at(): "+array1.at(1))
console.log("")

/* .join(data:string)
- Returns all of the array elements as an unique string, separated by the specified string (default is ",")
*/
console.log("join(): "+array1.join(", "))
console.log("")

/* .pop()
- Deletes the last element of the array.
Returns the deleted element.
*/
console.log("array1: "+array1)
console.log("pop(): "+array1.pop())
console.log("array1: "+array1)
console.log("")

/* .push(data:any)
- Pushes the element placed as argument next to the array's last position.
Returns the new length 
*/
console.log("array1: "+array1)
console.log("push(\"Rob\"): "+array1.push("Rob"))
console.log("array1: "+array1)
console.log("")

/* .shift()
- Removes the array's first element, moving the rest accordingly. 
Returns the deleted element
*/
console.log("array1: "+array1)
console.log("shift(): "+array1.shift())
console.log("array1:"+array1)
console.log("")

/* .unshift(data:any)
- Adds a new element to the array's first position, moving the rest accordingly.
Returns the new array length
*/
console.log("array1: "+array1)
console.log("unshift(\"Bob\"): "+array1.unshift("Bob"))
console.log("array1: "+array1)
console.log("")

/* .delete()
- Deletes the element in the specified index (MAKES IT UNDEFINED!)
Returns boolean indicating whether the action was performed or not.
*/
console.log("array1: "+array1)
console.log("delete(): "+delete(array1[0]))
console.log("array1: "+array1)
console.log("")
array1[0]="Bob"

/* .concat(data:array, ...)
- Fuses an array with the array specified as argument. Can also take Strings as arguments.
Returns a new array (doens't modify the original array)
*/
console.log("array1: "+array1)
console.log("array2: "+array2)
console.log(array1.concat(array2))

/* .copyWithin(position:number,start:number,end?:number)
- Copies the specified element(s) starting from the given position.
Returns the this object (basically the same reference to the original array)
*/
console.log("array1: "+array1)
console.log("copyWithin(0,4): "+array1.copyWithin(0,4))
console.log("array1: "+array1)

// .flat()


// .splice()


// .toSpliced()


// .slice()

