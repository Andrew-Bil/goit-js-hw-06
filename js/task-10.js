function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesRef = document.querySelector("#boxes");
const inputRef = document.querySelector("input");
const createButt = document.querySelector('button[data-create]');
const destroyButt = document.querySelector('button[data-destroy]');

inputRef.addEventListener("input", inputHandler);
createButt.addEventListener("click", createButtHandler);
destroyButt.addEventListener("click", destroyButtHandler);

function inputHandler(){
  //console.log(event.currentTarget.value);
  return inputRef.value;
}

function createButtHandler() {
  const arr =[]; 
  let size = 20;
  
  for (let i = 0; i < inputRef.value  ; i +=1){
    const div = document.createElement("div");
    size +=10;
    div.style.width = size + "px";
    div.style.height = size + "px";
    div.style.backgroundColor = getRandomHexColor();
    arr.push(div);
  }
  boxesRef.append(...arr);
  return console.log(boxesRef);
};

function destroyButtHandler() {
  boxesRef.innerHTML = '';
  inputRef.value = "";
};
