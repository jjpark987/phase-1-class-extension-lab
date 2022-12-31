// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides
    }
    get countSides() {
        return this.sides.length
    }
    get perimeter() {
        return this.sides.reduce((total, sideLength) => {
            return total + sideLength
        }, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        const max = Math.max(...this.sides)
        if(this.countSides !== 3) {
            return false
        } else if(max > this.perimeter - max) {
            return false
        } else {
            return true
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if(this.countSides !== 4) {
            return false
        }
        switch(this.sides[0]) {
            case this.sides[1]:
            case this.sides[2]:
            case this.sides[3]:
                return true
            default:
                return false
        }
    }
    get area() {
        return (this.perimeter / 4) ** 2
    }
}