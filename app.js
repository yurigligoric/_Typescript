function add(num1, num2) {
    var result;
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        result = num1 + num2;
    }
    else {
        // if strings
        result = num1.toString() + num2.toString();
    }
    return result;
}
var var1 = 5;
var var2 = 6;
var varstring1 = "hey";
var varstring2 = "yeheyyyyyy";
console.log(add(var1, var2));
console.log(add(varstring1, varstring2));
