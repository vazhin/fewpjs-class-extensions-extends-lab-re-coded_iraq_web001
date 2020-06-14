class Polygon {
  constructor(array){
    this.sides = array;
  }
  get countSides() {
    return this.sides.length
  }
  get perimeter(){
    return this.sides.reduce((sum, side) => sum += side, 0)
  }
}

class Triangle extends Polygon {
  get isValid(){
    return
  }
}

class Square extends Polygon {
  get isValid(){
    let allSidesAreEqual = true;
  }
  get area(){
    return this.sides[0]
  }
}
