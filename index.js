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
    let allSidesEqual = true;
    for(let i = 0; i < this.sides.length; i++){
      if(this.sides[i] !==){

      }
    }
    return allSidesEqual
  }
  get area(){
    return this.sides[0]
  }
}
