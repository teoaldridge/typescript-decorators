// Returning (and changing) a Class in a Class Decorator

// Somde Decorators, like Class Decorators and Method Decorators, 
//are capable of returning something!!!

function LoggBands(logString: string) {
    console.log('LOGGER FACTORY');
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate1(template: string, hookId: string){
    console.log('TEMPLATE FACTORY');
    //here we make the original Contructor of Generic Type (<T>, :T)
    //To tell TS that this will be a Constructor Function: 
    //We can make this clear by assigning a special type, an object  {new(...args: any[]) : {}}
    //Where 'new' is a TS property that tells TS 
    //that in the end this will be an object that can be 'newed'
    //And this new function/obejct that the object that T is based on, will have 
    //any amount of arguments: ...args
    return function<T extends {new(...args: any[]) : {name: string}}>(originalConstructor: T) {
    
        //we return here a new Constructor function or class which will replace the old one. 
        //The class should extend the existing constructor- so it is based on the original constructor function. 
        return class extends originalConstructor {
            //When you add a constructor function in another class which has a constructor, 
            //you HAVE TO call super(), and now you can add any logic you want!
            //For example, we can move the template rendering logic from our Decorator Function
            //inside this constructor function here:
            constructor(..._: any[]) {
                super();
                console.log('Rendering template');
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name; 
                }
            }
        }
    }    
};

@LoggBands('LOGGING')
@WithTemplate('<h1>My Employee Object</h1>', 'app')
class Band{
    name = 'The Band that Rocks!';

    constructor(){
        console.log('Creating a band object...');
    }
}

const theSnails = new Band(); 

console.log(theSnails);