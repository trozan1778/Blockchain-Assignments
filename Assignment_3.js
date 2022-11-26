// 1. Using for loops, write a Javascript program to output the following
// pattern -
// 1
// 2 3
// 4 5 6
// 7 8 9 10

// n = 1
// for(let i=1;i<=5;i++){
//     m = "";
//     for(let j=1;j<=i;j++){
//         m = m.concat(" ",n) 
//         n++;
//     }
//     console.log(m)
// }

// 2. Write a program to find whether a given number is armstrong number or not-
// The Armstrong number is a number that is equal to the sum of cubes of
// its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
// numbers. Let's try to understand why 153 is an Armstrong number.
// 153 = (1*1*1)+(5*5*5)+(3*3*3) where:
// (1*1*1)=1
// (5*5*5)=125
// (3*3*3)=27
// So:
// 1+125+27=153

m = 153,sum = 0;
num = m;
len = m.toString().length;
for(let i=len;i>=1;i--){
    temp = Math.trunc(num/(10**(i-1)));
    sum = sum + (temp**3);
    num = num - temp*(10**(i-1)); 
}

if (sum==m){
    console.log(m + " is an Armstrong Number")
}
else{
    console.log(m + "is not an Armstrong number")
}

// 3. Write a program to find whether a given number is special number or not-
// If the sum of the factorial of digits of a number (N) is equal to the
// number itself, the number (N) is called a special number.
// eg- 145 is a special number
// Logic- 1! + 4! + 5!= 1+24+120 i.e 145

m = 145,sum = 0;
num = m
len = m.toString().length;
for(let i=len;i>=1;i--){
    temp = Math.trunc(m/(10**(i-1)));
    fact =1;
    for(let i=1;i<=temp;i++){
        fact = fact*i;
    }
    sum = sum + fact;
    m = m - temp*(10**(i-1));
}
if (sum==num){
    console.log(num + " is a Special Number")
}
else{
    console.log(num + " is not a Special number")
}
