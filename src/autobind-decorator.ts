//Creating an 'Autobind' Decorator

//Here we will show an example of 
//returning a new Property Descriptor object in a Method Decorator


//So we can rturn something on Method Decorators and this something
//should be a Descriptor which allows us to change the Method or
//change the configuration of the Method. 

//Here I want to mahe sure that 
//when we click our button 'Click me', 
//we execute a method on an object. 

//Here we create a Method Decorator 

//I am not interested in target and methodName here, so this is why I replace them with _ and _2
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    //here we add a Property Descriptor object, with all its properties
    const adjDescriptor: PropertyDescriptor = {
        configurable: true, 
        enumerable: false,
        //here in the getter, we will add some extra logic, when users try to access this property, 
        //so we don't just get the value of this function, but we can step in and do something 
        //before we execute this function, that's the idea.
        //So we don't add a value property here, we have a getter.
        //Having a getter is like having a value property with having extra logic 
        //that runs before the value is returned.

        //here 'this' would refer to whathever is responsible for triggering this getter method, 
        get() {
            //if we remove the .bind(this) here, ut will be undefined!!
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    //so with this TS will overwrite the old descriptor with this descriptor here: 
    return adjDescriptor; 
}


class Printer {
    message = 'This works!';

    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer(); 

//here we use our Decorator:
//the ! shows that the button exists and it will not be null!
const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);


//we use the bind method here, so that 'this' here can refer 
//not to what the eventListener wants it to refer to(this),
//but it can refer to the object we created 'p'
// button.addEventListener('click', p.showMessage.bind(p));