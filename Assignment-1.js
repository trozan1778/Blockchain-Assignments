// 1. Write a program to find whether a given year is a leap year or not.

year = 2172;

if((year%4==0&&year%100!=0)||(year%400==0)){
    console.log("The year "+year+" is a leap year");
}
else{
    console.log("The year "+year+" is not a leap year \n");
}

// 2. Write a JavaScript program to convert temperatures to and from Celsius,
// Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
// Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C
// f= c*(9/5) +32

// celsius to fahrenheit

function c_to_f(temp) {
    let y;
    y = (temp*(9/5)+32);
    console.log(temp+" degree celsius is equivalent to "+y+" degree fahrenheit")
}

c_to_f(60)

function f_to_c(temp){
    let y;
    y = ((temp-32)*5)/9;
    console.log(temp+" degree fahrenheit is equivalent to "+y+" degree celsius")
}

f_to_c(45)

// 3. Write a program to find the factorial of a number.


n = 4;
let fact = 1;
for(let i=1;i<=n;i++){
    fact = fact*i;
}
console.log("The factorial of "+n+" is "+fact)
