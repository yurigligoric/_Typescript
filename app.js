var Vehicle = /** @class */ (function () {
    function Vehicle(t, c) {
        this.type = t;
        this.color = c;
    }
    return Vehicle;
}());
var car = new Vehicle('Ford', 'blue');
console.log(car.color);
