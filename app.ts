function add(num1: number | string, num2: number | string){
  let result;
  if(typeof num1 === 'number' && typeof num2 === 'number'){
    result = num1 +num2;
  }
  else
  {
    // if strings
    result = num1.toString() + num2.toString(); 

  }
  return result;

}

const var1 = 5
const var2 = 6
const varstring1 = "hey"
const varstring2 = "yeheyyyyyy"


console.log(add(var1, var2))
console.log(add(varstring1, varstring2))

