const button = document.querySelector("button") as HTMLButtonElement;
const input1 = document.getElementById("numSpaces") as HTMLInputElement;
const input2 = document.getElementById("inputString") as HTMLInputElement;

function prepend<E>(numSpaces: E[]) {
    return " ".repeat(+numSpaces[0]) + numSpaces[1];
}
  
button!.addEventListener("click", function () {
   console.log(prepend([input1!.value, input2!.value]));
});