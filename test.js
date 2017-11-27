"use strict";
var greeter = (name) => `Hello ${name}`;
var user = "Etienne";
console.log(greeter(user));
var drawRectangle = (option) => {
    let width = option.width;
    let length = option.length;
    if (option.height) {
        let height = option.height;
    }
};
drawRectangle({
    width: 5,
    length: 3
});
class Animal {
    constructor(theName) {
        this.name = theName;
    }
    walk(distance) {
        console.log(`Hi my name is ${this.name}, and i'm walking ${distance} meter`);
    }
}
class Snake extends Animal {
    constructor(thisName) {
        super(thisName);
    }
    walk(distance) {
        console.log("I don't walk!");
    }
}
let daveTheSanke = new Snake("Dave");
daveTheSanke.walk(21);
