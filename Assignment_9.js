// 1. Carefully observe this example.
// a) Is the InnerFunction() a closure?
// b) What is output of this program

// function OuterFunction()
// { var outerVariable = 100;
// function InnerFunction() {
// alert(outerVariable);
// }
// return InnerFunction;
// }
// var innerFunc = OuterFunction();
// innerFunc();

// a) Yes, the inner function is closure
// b) 100

// 2. What is the difference between a closure and a scope ?

// Ans. The inner function is closure whenever you create a function inside of another function. Typically, this closure is returned so that you can utilise the variables from the outer function in the future. In contrast, a JavaScript scope specifies the variables you can access. Global scope and local scope are the two types of scope.

// 3. What is a lexical scope and how is it related to closure?

// Ans. A function scope can access the variables from the outer scopes statically thanks to the lexical scope. A function that captures variables from its lexical scope is known as a closure. 

// 4. Output of following closure ?
// for (var i = 0; i < 3; i++) {
// setTimeout(function log() {
// console.log(i); // What is logged?
// }, 1000);
// }

// Ans.3
//     3
//     3
