//Other Decorator Return Types

//Decorators that can return something are:
//Class Decorators
//Method Decorators
//Accessor Decorators 


//The Property Decorators and the Parameter Decorators 
//can also return something but TS will ignore it!!!

//So here the decorators Zog1-Property D and Zog4- Parameter D can also return something

//What can we return on Zog2- Accessor D and Zog3 - Method D?- 
//You can return a brand new PROPERTY DESCRIPTOR
//Both Accessor and Method Decorators get the property descriptor 
//of the method they are attached to.!!
//The reason they are similar is that an Accessor is kind of like a Method!

// In Vanilla JS we have Property Descriptors as well. They allow you to define a property in more detail.
// You can of course assign and change a value of a property, 
// But you can also control it by its 
// 	- Writeable - so whether you can change it after it has been created,
// 	- Configurable - whether you can change its configuration and whether you can delete this property 
//  - Enumerable- for example, if count shows up when you loop through your object 


//The Property decorator can return something!
function Zog1(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}

//The Accessor Decorator can return a new Property Descriptor
function Zog2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name); 
    console.log(descriptor); 
}

//The Method Decorator can return a new Property Descriptor
function Zog3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name); 
    console.log(descriptor); 
}

//The Parameter decorator can return something!
function Zog4(target: any, name: string | Symbol, position: number){
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name); 
    console.log(position); 
}

class Book {
    @Zog1
    title: string;
    private _price: number;

    //Accessor Decorators get the property descriptor 
    //of the method they are attached to.!!
    @Zog2
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

    // Method Decorators get the property descriptor 
    //of the method they are attached to.!!
    @Zog3
    getPriceWithTax( @Zog4 tax: number) {
        return this._price * (1 + tax);
    }
}

const book1 = new Book('Harry Potter', 1);
const book2 = new Book('Matilda', 2);
