interface Color {
  draw(): void;
}

class Red implements Color {
  draw() {
    console.log('Draw Red');
  }
}

class Blue implements Color {
  draw() {
    console.log('Draw Blue');
  }
}

class Green implements Color {
  draw() {
    console.log('Draw Green');
  }
}

abstract class Shape {
  protected color!: Color;

  constructor(color: Color) {
    this.color = color;
  }

  abstract drawShape(): void;
}

class Rectangle extends Shape {
  constructor(color: Color) {
    super(color);
  }

  drawShape(): void {
    console.log('Rectangle created');
    this.color.draw();
  }
}

class Circle extends Shape {
  constructor(color: Color) {
    super(color);
  }

  drawShape(): void {
    console.log('Circle created');
    this.color.draw();
  }
}

const red = new Red();

const blue = new Blue();

const redRectangle = new Rectangle(red);

const blueCircle = new Circle(blue);

redRectangle.drawShape();
blueCircle.drawShape();
