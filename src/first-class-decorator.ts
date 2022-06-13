// A FIRST CLASS DECORATOR

//A Decorator is in the end just a function-
// a function that can be applied to something, i.e. a class
//in a certain way.

//This is One way of creating a Decorator- there are also other ways: 

//here I create the Decorator 'Logger'
function Logger(constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
}

//Here I add the Decorator 'Logger' to the class Person
//!!!The Decorator runs when JS finds your Class Definition, your Constructor Function Definition, 
//Not when you use that Constructor Function to extentiate an object.!!!
@Logger
class Person{
    name = 'Max';

    constructor(){
        console.log('Creating person object...');
    }
}

const pers = new Person(); 

console.log(pers);