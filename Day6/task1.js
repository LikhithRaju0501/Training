var parEl = document.getElementById("mylist");
console.log(parEl);
var firstChild = parEl.firstElementChild;
console.log(firstChild);
var lastChild = parEl.lastElementChild;
console.log(lastChild);
var allChild = parEl.children;
console.log(allChild);
console.log(firstChild.nextElementSibling);

var newEl = document.createElement("li");
newEl.textContent = "Green tea";
// parEl.append(newEl);
// parEl.insertBefore(
//   newEl,
//   parEl.firstElementChild.nextElementSibling.nextElementSibling
// );

parEl.replaceChild(newEl, parEl.firstElementChild.nextElementSibling);
parEl.removeChild(parEl.lastElementChild);
