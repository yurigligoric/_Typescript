const input1text = document.querySelector("#input1") as HTMLInputElement;
const input2text = document.querySelector("#input2") as HTMLInputElement;
const submitbutton = document.querySelector("button");

function addNumbers(num1 : number, num2 : number){
    return num1+num2;

}


submitbutton?.addEventListener("click", ()=> {
    console.log(addNumbers(+input1text.value, +input2text.value));
}) 
