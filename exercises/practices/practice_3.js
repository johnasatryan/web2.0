// node --version || node -v
// nvm (Node version manager)
// npm install -g typescript
// npx tsc --init
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Concrete base coffee
var SimpleCoffee = /** @class */ (function () {
    function SimpleCoffee() {
    }
    SimpleCoffee.prototype.cost = function () {
        return 5;
    };
    SimpleCoffee.prototype.description = function () {
        return 'Simple Coffee';
    };
    return SimpleCoffee;
}());
// Abstract decorator
var CoffeeDecorator = /** @class */ (function () {
    function CoffeeDecorator(coffee) {
        this.coffee = coffee;
    }
    return CoffeeDecorator;
}());
// Concrete decorators
var WithMilk = /** @class */ (function (_super) {
    __extends(WithMilk, _super);
    function WithMilk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WithMilk.prototype.cost = function () {
        return this.coffee.cost() + 1;
    };
    WithMilk.prototype.description = function () {
        return this.coffee.description() + ', Milk';
    };
    return WithMilk;
}(CoffeeDecorator));
var WithSugar = /** @class */ (function (_super) {
    __extends(WithSugar, _super);
    function WithSugar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WithSugar.prototype.cost = function () {
        return this.coffee.cost() + 0.5;
    };
    WithSugar.prototype.description = function () {
        return this.coffee.description() + ', Sugar';
    };
    return WithSugar;
}(CoffeeDecorator));
var WithWhippedCream = /** @class */ (function (_super) {
    __extends(WithWhippedCream, _super);
    function WithWhippedCream() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WithWhippedCream.prototype.cost = function () {
        return this.coffee.cost() + 2;
    };
    WithWhippedCream.prototype.description = function () {
        return this.coffee.description() + ', Whipped Cream';
    };
    return WithWhippedCream;
}(CoffeeDecorator));
// Example
// const myCoffee = new WithSugar(new WithMilk(new SimpleCoffee()));
// console.log(myCoffee.description()); // Simple Coffee, Milk, Sugar
// console.log(myCoffee.cost()); // 6.5
var milkCoffee = new WithWhippedCream(new WithMilk(new SimpleCoffee()));
console.log(milkCoffee.cost());
console.log(milkCoffee.description());
