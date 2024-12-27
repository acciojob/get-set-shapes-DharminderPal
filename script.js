class Rectangle {
    constructor(width, height) {
        this._width = width;  // Use a private variable to store width
        this._height = height; // Use a private variable to store height
    }

    get width() {
        return this._width; // Getter for width
    }

    get height() {
        return this._height; // Getter for height
    }

    getArea() {
        return this.width * this.height; // Calculate area
    }

    getPerimeter() {
        return 2 * (this.width + this.height); // Calculate perimeter
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side); // A square is a rectangle with equal width and height
    }

    getPerimeter() {
        return 4 * this.width; // Perimeter of a square
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;