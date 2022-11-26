//1. Write a Javascript function to check whether a triangle is equilateral, isosceles or scalene

a = 40;
b = 40;
c = 100;

if (a==b && b==c){
    console.log("The given triangle is equilateral");
}
else if(a==b || b==c || a==c){
    console.log("The given triangle is isoceless");
}
else if(a!=b || b!=c || a!=c){
    console.log("The given triangle is scalene")
}

// Write a function using switch case to find the grade of a student based on marks obtained
// a. “S grade” if the marks are between 90 and 100.
// b. “A grade” if the marks are between 80 and 90.
// c. “B grade” if the marks are between 70 and 80.
// d. “C grade” if the marks are between 60 and 70.
// e. “D grade” if the marks are between 50 and 60.
// f. “E grade” if the marks are between 40 and 50.
// g. “Student has failed” if the marks are between 0 and 40.
// h. Else output “Invalid marks”.
marks = 36
switch(true){
    case(marks<100 && marks>90):
        console.log("S grade");
        break;
    case(marks<90 && marks>80):
        console.log("A grade");
        break;
    case(marks<80 && marks>70):
        console.log("B grade");
        break;
    case(marks<70 && marks>60):
        console.log("C grade");
        break;
    case(marks<60 && marks>50):
        console.log("D grade");
        break;
    case(marks<50 && marks>40):
        console.log("E grade");
        break;    
    case(marks<40 && marks>0):
        console.log("Student has failed");
        break; 
    default:
        console.log("Invalid Marks")   
}

// 3. Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000

m1 = 3;
while(m1<1000/3){
    m1 = m1*3;
}

m2 = 5;
while(m2<1000/5){
    m2 = m2*5;
}

console.log(m1);
console.log(m2);
console.log(m1+m2);


// 4. Write a program to find the factorial of all prime numbers between a given range . Range will be passed as 2 values in the function parameters.
// Eg- if it is needed to find the values for numbers 1-100, then function declaration can look like - function prime(1,100).

function fact_of_prime(a,b){
    for(i=a;i<=b;i++){
        let card = true;
        for(j=2;j<i;j++){
            if(i%j==0){
                card= false;
                break;
            }
        }
        if (card==true){
            let fact =1;
            for(k=1;k<=i;k++){
                fact = fact*k;
            }
            console.log("The factorial of "+i+" is "+fact)
        }
    }
}

fact_of_prime(1,10)
