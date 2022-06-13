//Accessor, Method, & Parameter Decorators
function Mog(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}

//here e create the Accessor Decorator Mog2
//Accessor Decorators take the following parameters: target, name, descriptor. 
//propertyDescriptor is built-in into TS
function Mog2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name); 
    console.log(descriptor); 
}

//here e create the Method Decorator Mog3
//Method Decorators take the following parameters: target, name, descriptor. 
function Mog3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name); 
    console.log(descriptor); 
}

//here e create the Parameter Decorator Mog4
//Parameter Decorators take the following parameters: target, name, position
//(what is their position amongst the other parameters).
function Mog4(target: any, name: string | Symbol, position: number){
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name); 
    console.log(position); 
}

class Product1 {
    @Mog
    title: string;
    private _price: number;

    //we assign the Decorator Mog2 to the Accessor 'set price'-
    // so it becomes an Accessor Decorator.
    @Mog2
    set price(val:number) {
        if(val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive!');
        }
    }

    constructor(t:string, p:number) {
        this.title = t;
        this._price = p;
    }

    //we assign the the Decorator Mog3 to the method 'getPriceWithTax',
    //so it becomes a Method Decorator
    //here we allso assign the Decorator Mog4 to the parameter 'tax',
    //so it becomes a Parameter Decorator
    @Mog3
    getPriceWithTax( @Mog4 tax: number) {
        return this._price * (1 + tax);
    }
}

// The Order in Which Decorators Run

//They are all running without us instatiating the this class. 

//For example, if I create an instance of this class twice, for example:

const p1 = new Product('Book', 19);
const p2 = new Product('Book', 19);

//My Decorator code will still run only once. 
//So it is not the instantiation of this class that matters, 
//!All these decorators executed when you defined this class.!

//Thse Decorators allow you to do additional behind the scenes set up work
//when a class is defined. - like set up some metadata 
//or store some data about a property somewhere else in your project

//So Decorators add some extra functionality behind the scenes,
// which sometimes can execute when you do something when you execute your class or method, etc. 
//but which can also do totally different things.

// So Decorators get executed whenever you create the class, 
//and then are stored behind the scenes so you can use them when you want to use them.