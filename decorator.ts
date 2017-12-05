abstract class Car {
    public description: string;

    public getDescription(): string {
        return this.description;
    }

    public abstract cost(): number;
}

class ModelS extends Car {
    public description = "ModelS";

    public cost(): number {
        return 73000;
    }
}

class ModelX extends Car {
    public description = "ModelX";

    public cost(): number {
        return 77000;
    }
}

abstract class carOptions extends Car {
    decoratedCar: Car;

    public abstract getDescription(): string;
    public abstract cost(): number;
}

class EnhancedAutoPilot extends carOptions {
    decoratedCar: Car;

    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }

    public getDescription(): string {
        return this.decoratedCar.getDescription() + ', enhanced AutoPilot!';
    }
    public cost(): number {
        return this.decoratedCar.cost() + 5000;
    }
}

class RearFacingSeat extends carOptions {
    decoratedCar: Car;

    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }

    public getDescription(): string {
        return this.decoratedCar.getDescription() + ', enhanced rear facing seat!';
    }
    public cost(): number {
        return this.decoratedCar.cost() + 4000;
    }
}

let myTesla = new ModelS();
myTesla = new EnhancedAutoPilot(myTesla);
myTesla = new RearFacingSeat(myTesla);

console.log(myTesla.cost());
console.log(myTesla.getDescription());

