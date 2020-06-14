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
    let valid = true;
    let sumOfTwoSides = this.sides[0] + this.sides[1]
    if(sumOfTwoSides !> this.sides[2]){
      valid = false
    }
    return valid
  }
}

class Square extends Polygon {
  get isValid(){
    let valid = true;
    for(let i = 0; i < this.sides.length - 1; i++){
      if(this.sides[i] !== this.sides[i + 1]){
        valid = false
        break
      }
    }
    return valid
  }
  get area(){
    return this.sides[0] ** 2
  }
}
