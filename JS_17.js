// 1. Create a function to iterate over the following list ["John",
// "Rohn", "Danny", "James"]

names = ["John","Rohn","Danny","James"]

names.forEach(func);

function func(item){
    console.log(item);
}

// 2. Iterate over all the characters of the word "iNeuron".

name1 = "iNeuron";
for(let i=0;i<name1.length;i++){
    console.log(name1[i]);
}

// 3. Create a functional iterator, with a next function.

function* GFG() {
    yield "GeeksforGeeks";
    yield "JavaScript";
    yield "Generator.prototype.next()";
}

const geek = GFG();

temp = geek.next()
while(temp.done==false){
    console.log(temp.value);
    temp = geek.next();
}
  
// 4. In the following two arrays find which two elements match
// using iterators.
// Array 1 - ["a", "b", "c", "d"]
// Array 2 - ["e", "f", "g", "h", "a", "i", "j"]

a = ["a", "b", "c", "d"]
b = ["e", "f", "g", "h", "a", "i", "j"]

a.forEach(func);
function func(item){
    b.forEach(func1 = (item1) => {
        if(item1 == item){
            console.log(item + " is common on both the arrays.")
        };
      })
}

// 5. What are the different ways of iterating through an array?
// demonstrate them.

// Ans.1) Using for loop

arr = [1,2,3,4,5];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//2.) using foreach

arr = [1,2,3,4,5];
arr.forEach(func);

function func(item){
    console.log(item);
}
//3.) while loop

arr = [1,2,3,4,5];
count = 0;
while(count<arr.length){
    console.log(arr[count]);
    count++;
}
