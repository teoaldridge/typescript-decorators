"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function LoggStudents(logString) {
    console.log('LOGGER FACTORY');
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithMessage(template, hookId) {
    console.log('TEMPLATE FACTORY');
    return function (constructor) {
        console.log('Rendering Message');
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.name;
        }
    };
}
;
let Student = class Student {
    constructor() {
        this.name = 'Froggie';
        console.log('Creating person object...');
    }
};
Student = __decorate([
    LoggStudents('LOGGING'),
    WithMessage('<h1>My Employee Object</h1>', 'app')
], Student);
const ITStudent = new Student();
console.log(ITStudent);
//# sourceMappingURL=multiple-decorators.js.map