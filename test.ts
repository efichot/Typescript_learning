var greeter = (name: string) => `Hello ${name}`;

var user = "Etienne";

console.log(greeter(user));

interface rectangleOption {
    width: number,
    length: number,
    height?: number 
}

var drawRectangle = (option : rectangleOption) => {
    let width = option.width;
    let length = option.length;
    if (option.height) {
        let height = option.height;
    }
}

drawRectangle({
    width: 5,
    length: 3
})


abstract class Animal {
    private name: string;

    constructor(theName: string) {
        this.name = theName;
    }

    walk(distance: number): void {
        console.log(`Hi my name is ${this.name}, and i'm walking ${distance} meter`);
    }
}

class Snake extends Animal {
    constructor(thisName: string) {
        super(thisName);
    }

    walk(distance: number): void {
        console.log("I don't walk!");
    }
}

let daveTheSanke = new Snake("Dave");
daveTheSanke.walk(21);