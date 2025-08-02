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
var Red = /** @class */ (function () {
    function Red() {
    }
    Red.prototype.draw = function () {
        console.log('Draw Red');
    };
    return Red;
}());
var Blue = /** @class */ (function () {
    function Blue() {
    }
    Blue.prototype.draw = function () {
        console.log('Draw Blue');
    };
    return Blue;
}());
var Shape = /** @class */ (function () {
    function Shape(color) {
        this.color = color;
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(color) {
        return _super.call(this, color) || this;
    }
    Rectangle.prototype.drawShape = function () {
        console.log('Rectangle created');
        this.color.draw();
    };
    return Rectangle;
}(Shape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color) {
        return _super.call(this, color) || this;
    }
    Circle.prototype.drawShape = function () {
        console.log('Circle created');
        this.color.draw();
    };
    return Circle;
}(Shape));
var red = new Red();
var blue = new Blue();
var redRectangle = new Rectangle(red);
var blueCircle = new Circle(blue);
redRectangle.drawShape();
blueCircle.drawShape();
