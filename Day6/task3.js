var red = document.getElementById("stop");
var yellow = document.getElementById("wait");
var green = document.getElementById("go");
var doc = document.getElementById("app");
var traffic = document.getElementById("traffic");
console.log(traffic);

red.addEventListener("click", function () {
  doc.setAttribute("id", "red");
});

yellow.addEventListener("click", function () {
  doc.setAttribute("id", "yellow");
});

green.addEventListener("click", function () {
  doc.setAttribute("id", "green");
});

traffic.addEventListener("click", function () {
  doc.setAttribute("id", "app");
});
