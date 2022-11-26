// 1. Can we put duplicate values in the set object ?

// Ans - No, it holds only unique values

// 2. Write the syntax for
// a) Creating new set object
// b) Adding new element to set object
// c) Deleting element from set object

// Ans - const Set_name = new Set();
// Set_name.add("value1");
// Set_name.delete("value1");

// 3. Create a set object with four random numbers from 0 to 10. Check if this newly created set object has 8 in it. Use set object methods.

const rand = new Set();

do{
    rand.add(Math.floor(Math.random() * 11));
}
while(rand.size<3)

console.log(rand)
console.log(rand.has(8))