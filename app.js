var input1text = document.querySelector("#input1");
var input2text = document.querySelector("#input2");
var submitbutton = document.querySelector("button");
function addNumbers(num1, num2) {
    return num1 + num2;
}
submitbutton === null || submitbutton === void 0 ? void 0 : submitbutton.addEventListener("click", function () {
    console.log(addNumbers(+input1text.value, +input2text.value));
});
