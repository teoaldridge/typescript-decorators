"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Zog1(target, propertyName) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}
function Zog2(target, name, descriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Zog3(target, name, descriptor) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Zog4(target, name, position) {
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}
class Book {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error('Invalid price - should be positive!');
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Zog1
], Book.prototype, "title", void 0);
__decorate([
    Zog2
], Book.prototype, "price", null);
__decorate([
    Zog3,
    __param(0, Zog4)
], Book.prototype, "getPriceWithTax", null);
const book1 = new Book('Harry Potter', 1);
const book2 = new Book('Matilda', 2);
//# sourceMappingURL=other-decorator-return-types.js.map