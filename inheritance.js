class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}
Rectangle.prototype.area = function () {
    return (this.w * this.h);
}
/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
/*a Square class that inherits from Rectangle and implement its class constructor*/
class Square extends Rectangle {
    constructor(s) {
        super(s, s);
    }
    
}
