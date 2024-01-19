class Vehicle {
  type: string
  color: string

  constructor(t: string, c: string){
    this.type = t;
    this.color = c;
  }
}

const car = new Vehicle('Ford', 'blue');

console.log(car.color);