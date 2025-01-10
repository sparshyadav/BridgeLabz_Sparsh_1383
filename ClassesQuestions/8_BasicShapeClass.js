// Create Class Shape
class Shape{
    area(){
        console.log("Calculating Area");
        
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius=radius;
    }

    area(){
        super.area();
        let circleArea=3.14*(this.radius**2);
        return circleArea;
    }
}

class Rectangle extends Shape{
    constructor(length, breadth){
        super();
        this.breadth=breadth;
        this.length=length;
    }

    area(){
        super.area();
        let rectArea=this.length*this.breadth;
        return rectArea;
    }
}

let s=new Shape();
s.area();

let c=new Circle(4);
console.log(c.area());

let r=new Rectangle(4, 6);
console.log(r.area());