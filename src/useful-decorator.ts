// BUILDING MORE USEFUL DECORATORS


function WithTemplate(template: string, hookId: string){
    //here we say we will use a constructor function and set it to type any 
    return function(constructor: any) {
        //here we define a new constructor
        const p = new constructor();
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
            //the ! here tells TS that we are certain that we 
            //will always find an h1 in the html element.
            //here we use the constructor to access the name of the object 
            hookEl.querySelector('h1')!.textContent = p.name; 
        }
    }
};

@WithTemplate('<h1>My Employee Object</h1>', 'app')
class Employee{
    name = 'Froggie';

    constructor(){
        console.log('Creating person object...');
    }
}

const developer = new Employee(); 

console.log(developer);