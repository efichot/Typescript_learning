var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getDescription = function () {
        return this.description;
    };
    return Car;
}());
var ModelS = /** @class */ (function (_super) {
    __extends(ModelS, _super);
    function ModelS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "ModelS";
        return _this;
    }
    ModelS.prototype.cost = function () {
        return 73000;
    };
    return ModelS;
}(Car));
var ModelX = /** @class */ (function (_super) {
    __extends(ModelX, _super);
    function ModelX() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "ModelX";
        return _this;
    }
    ModelX.prototype.cost = function () {
        return 77000;
    };
    return ModelX;
}(Car));
var carOptions = /** @class */ (function (_super) {
    __extends(carOptions, _super);
    function carOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return carOptions;
}(Car));
var EnhancedAutoPilot = /** @class */ (function (_super) {
    __extends(EnhancedAutoPilot, _super);
    function EnhancedAutoPilot(car) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        return _this;
    }
    EnhancedAutoPilot.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ', enhanced AutoPilot!';
    };
    EnhancedAutoPilot.prototype.cost = function () {
        return this.decoratedCar.cost() + 5000;
    };
    return EnhancedAutoPilot;
}(carOptions));
var RearFacingSeat = /** @class */ (function (_super) {
    __extends(RearFacingSeat, _super);
    function RearFacingSeat(car) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        return _this;
    }
    RearFacingSeat.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ', enhanced rear facing seat!';
    };
    RearFacingSeat.prototype.cost = function () {
        return this.decoratedCar.cost() + 4000;
    };
    return RearFacingSeat;
}(carOptions));
var myTesla = new ModelS();
myTesla = new EnhancedAutoPilot(myTesla);
myTesla = new RearFacingSeat(myTesla);
console.log(myTesla.cost());
console.log(myTesla.getDescription());
