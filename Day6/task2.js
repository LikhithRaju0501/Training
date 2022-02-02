var a = document.getElementById("app");
a.setAttribute("class", "listName");
console.log(a.getAttribute("class"));
console.log(a.hasAttribute("class"));
a.removeAttribute("class");
console.log(a.hasAttribute("class"));

a.setAttribute("class", "listName");
a.classList.add("newClass");
console.log(a);
