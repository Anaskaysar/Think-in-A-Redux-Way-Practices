function myfunction() {
  console.log("heloo ");
}

const button = document.querySelector("#button");

button.addEventListener("click", myfunction);

button.addEventListener("click", function () {
  console.log("Hello World");
});
