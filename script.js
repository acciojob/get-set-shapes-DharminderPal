//complete this code

class Rectangle {

constructor(width, height ){
this.width=width;
this.height=height;
}
get width(){
    return this.width;
}

get height(){
return this.height;
}

getArea(){
    return this.width*this.height ;
}

set width(width) {
    this._width = width;
  }


  set height(height) {
    this._height = height;
  }
}
class Square extends Rectangle{
    constructor(side) {
    super(side, side); 
  }
//     getPerimeter(Square){
// return (2*length+width);
//     }
    getPerimeter() {
    return 4 * this.width; 
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
