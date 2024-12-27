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

}
class Square extends Rectangle{

    getPerimeter(Square){
return 2*(length+width);
    }
 
}


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
