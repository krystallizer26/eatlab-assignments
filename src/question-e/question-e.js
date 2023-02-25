// E. Write a function in JavaScript that takes an array of objects with a "name" property and 
// returns an object with keys representing the unique names and values representing the number 
// of times each name appears in the array.

// Example
// Input: [{name: "Alice"}, {name: "Bob"}, {name: "Alice"}])
// Output: { "Alice": 2, "Bob": 1 }

let question = [{name: "Alice"}, {name: "Bob"}, {name: "Alice"}]

function countingName (arr) {
   let nameObject = {}

   arr.forEach(elem => {
      if(nameObject[elem.name] === undefined) {
         nameObject[elem.name] = 1
      }
      else {
         nameObject[elem.name] = nameObject[elem.name] + 1
      }
   })
   return nameObject
}

console.log(countingName(question))

