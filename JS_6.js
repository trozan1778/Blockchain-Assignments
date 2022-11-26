// 1) Perform the following operations to provide the implementation for a Rectangle class. The operations are:
// 1. Add an area() method to the Rectangle class.
// 2. Create a Square class that satisfies the following conditions:
// ○ It is a subclass of Rectangle.
// ○ It contains a constructor and no other methods.
// ○ It can use the Rectangle class' area method to print the area of a Square object.

class Rectangle{
    constructor(length,breadth){
        this.length = length;
        this.breadth = breadth;
    }

    area(){
        return this.length*this.breadth;
    }
}

class Square extends Rectangle {
    contructor(length,breadth){
        this.length = length;
        this.breadth = breadth;
    }
}

let obj = new Square(4,4);
console.log(obj.area());

// 2) Write a javascript function find_largest to return the nth largest number in an array-
// eg- given an array of integers- [3,45,6,7,23,5,7,8]
// find_largest(3) will return third largest number from the above array which is 8.

const arr = [3,45,6,7,23,5,7,8]

function find_largest(num){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i;j++){
            if(arr[j]<arr[j+1]){
                a = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = a;
            }
        }
    }
    console.log(arr[num-1]);
}

find_largest(3)

// 3) Write a JavaScript program which accept a number as input in the function parameter and insert dashes (-) between each two even numbers.
// For example if you accept 025468 as the output should be 0-254-6-8.
// computeDash(025468) -> 0-254-6-8.

function add_dash(num){
    let text1 ="";
    for(let i=(num.toString().length)-1;i>0;i--){
        temp = Math.trunc(num/(10**i));
        num = num - temp*(10**i);
        temp1 = Math.trunc(num/(10**(i-1)));
        (temp%2==0 && temp1%2==0)?text1 = text1 + temp+"-":text1 = text1+""+temp;
    }
    text1 = text1+""+num;
    console.log(text1);
}

add_dash(9738274882347)