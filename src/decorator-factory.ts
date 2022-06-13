//DECORATOR FACTORY

//A Decorator Factory returns a Decorator Function but 
//allows us to configure it when we assign it 
//as a decorator to something

//Here we create a Decorator Factory
//We create a Decorator Function which RETURNS a Decorator Finction
//The advantage is that now we can pass in values which will then be used by this 
//inner Decorator Function.

//Decorator Factories give us more power to confugure what 
//the Decorator then does in this 
function Logg(logString: string) {
    return function(constructor: Function) {
        //here we are logging a logString variable 
        //which can be canged every time we use the decorator.
        //This is the advantage of using Decorator Factories. 
        console.log(logString);
        console.log(constructor);
    }
}
 
//So now we can pass to the Decorator any message of our choice 
@Logg('LOGGING HUMAN')
class Human{
    name = 'Max';

    constructor(){
        console.log('Creating person object...');
    }
}

const member = new Human(); 

console.log(member);