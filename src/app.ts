//Validation with Decorators

//validatorConfig interface where I will configure the storage I want to work with 
interface ValidatorConfig {
    [property: string] : {
        [validatableProp: string]: string[] // i.e. the values could be ['required', 'positive']
    }
}

//registeredValidators implements the interface validatorConfig
const registeredValidators: ValidatorConfig = {};

//Decorator 'Required'
function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['required']
    };
}

//Decorator 'PositiveNumber'
function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['positive']
    };
}


//Create function validate, were TS can take an Object, 
//and apply our validtion logic. 
function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    //if there is no object to validate, then return as it is
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    //if we do find an object, we loop through it
    //The double bang (!!) is short way to cast a variable 
    //to be a Boolean (true or false) value - so it can return either true or false
    for(const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch(validator) {
                case 'required':
                   isValid = isValid && !! obj[prop];
                   break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}

class UniCourse {
    @Required
    title: string; 
    @PositiveNumber
    price: number;
    
    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    //here we tell TS that the type of title will be HTMLInputElement
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    //we add + in front of priceEl to convert it into a number
    const price = +priceEl.value;

    const createdCourse = new UniCourse(title, price); 

    if (!validate(createdCourse)) {
        alert('Invalid input, please try again!');
        return;
    }
    console.log(createdCourse); 
});