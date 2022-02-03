var icon = document.getElementById('icon');
var para = document.getElementById("para");
let bool = false;
console.log(icon);


icon.addEventListener('click',function(){
    bool = !bool;
    if(bool){
        console.log("true");
    para.setAttribute("class","visible")
    }else{
        para.setAttribute("class","invisible")
    }
})



console.log(para.getAttribute("class"));


