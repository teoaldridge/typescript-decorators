//Adding Multiple Decorators. 

// The interesting thing here is hat the Decorator Fucntions get created 
//In the usual JS way- the first one we define, gets executed first. 
function LoggStudents(logString: string) {
    console.log('LOGGER FACTORY');
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

function WithMessage(template: string, hookId: string){
    console.log('TEMPLATE FACTORY');
    return function(constructor: any) {
        console.log('Rendering Message')
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name; 
        }
    }
};

//But when we apply the decorators on the class, 
//The bottom-up rule applies, 
//the one that is closest to the class gets applied first. 
//So here WithMessage will be applied before LoggStudent
@LoggStudents('LOGGING')
@WithMessage('<h1>My Employee Object</h1>', 'app')
class Student{
    name = 'Froggie';

    constructor(){
        console.log('Creating person object...');
    }
}

const ITStudent = new Student(); 

console.log(ITStudent);