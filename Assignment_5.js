// 1) Write a JavaScript program to get the volume of a Cylinder, Sphere and Cone with four decimal places using objects and classes.
// Create classes for volumes for each geometric shape which returns the output using the getVolume() method.

// eg- to get volume of cylinder-
// let obj= new Cylinder(radius,height);
// obj.getVolume();

// Formulas for volumes of the shapes-

// 1) Cylinder- Volume = πr2h
// where r is the radius and h is the height of the cylinder.
// 2)Sphere- Volume= 4/3πr3
// where r is the radius
// 3) Cone- Volume= πr2h/3
// where r is the radius and h is the height of the cone.
class Cylinder{

    constructor(radius,height){
        this.radius = radius;
        this.height = height;
    }
    getVolume(){
        return Math.PI*(this.radius**2)*this.height;
    }
}

class Sphere{
    constructor(radius){
        this.radius = radius;
    }

    getVolume(){
        return Math.PI*(4/3)*(this.radius**3)
    }
}

class Cone{
    constructor(radius,height){
        this.radius = radius;
        this.height = height;
    }

    getVolume(){
        return (Math.PI*(this.radius**2)*this.height)/3
    }
}

let obj= new Cylinder(4,3);
cylinder = obj.getVolume();
console.log("Cylinder "+cylinder)

let obj1 = new Sphere(4);
sphere = obj1.getVolume();
console.log("Sphere "+sphere)

let obj2 = new Cone(4,3);
cone = obj2.getVolume();
console.log("Cone ",cone)
