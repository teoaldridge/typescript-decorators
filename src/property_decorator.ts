//PROPERTY DECORATORS
 
//here we create a decorator
function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}

class Product {
    //and we add the Decorator within the class, as a Property Decorator
    //of the property 'title'
    @Log
    title: string;
    //here we rename the var to _price just so it has a different name to the setter
    private _price: number;

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

    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);
    }
}

//Property Decorators execute when your class Definition is registered with JavaScript
//So it gets executed when you define this as you define this property to JS, as part of your class,
//as part of your constructor function.