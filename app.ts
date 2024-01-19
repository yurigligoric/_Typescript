function sum(num1: number, num2: number){
  return num1 + num2;
}

function ResultOf(num3 : number): string {
  let resultString = `Result is: ${num3}`
  return resultString;
}


let AddTwoNumber : (num1: number, num2: number) => number;
let AddOneNumber : (num3: number) => string

AddTwoNumber = sum;
AddOneNumber = ResultOf;