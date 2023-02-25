// function changetext() {
//   const p = document.getElementById("first");
//   p.innerHTML = "Hello World";
// }
// function changetext() {
//   const p = document.querySelector("#first");
//   p.innerHTML = "Hello World";
// }

// function pressme() {
//   const inp1 = document.getElementById("inp1");
//   const inp2 = document.getElementById("inp2");
//   const button = document.getElementById("total");
//   button.innerHTML = "Result is" + Number(inp1) + Number(inp2);
// }

// const p = document.querySelector("#total");
// const inp1 = document.getElementById("inp1");
// console.log(inp1.value);

// p.onclick = function () {};

function myFunction() {
  console.log(Number(document.getElementById("myText").value) + 1);
}

function mycalculator() {
  const inp1 = document.getElementById("inp1");
  const inp2 = document.getElementById("inp2");
  const result = document.getElementById("showresult");
  const sum = Number(inp1.value) + Number(inp2.value);
  result.innerHTML = "The Result is : " + sum;
}

const button = document.querySelector("#button");

button.addEventListener("click", function () {
  console.log("Hello World");
});
