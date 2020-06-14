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
    for(let i = 0; i < this.sides.length - 1; i++){
      if(this.sides[i] !== this.sides[i + 1]){
        allSidesEqual = false
        break
      }
    }
    return allSidesEqual
  }
  get area(){
    return this.sides[0] ** 2
  }
}
