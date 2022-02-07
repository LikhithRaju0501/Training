let btn=document.getElementById('btn')
let task = document.getElementById('inputTask')
let parent = document.getElementById('parent')

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let taskValue = task.value;
    if(taskValue === '') {
        alert("Empty Task");
        return
    }
    let parentDiv = document.createElement('div')
    parentDiv.setAttribute('class','parentDiv')
    parent.appendChild(parentDiv)
   
    

    let child1 = document.createElement("div");
    child1.textContent=taskValue;
    child1.setAttribute('class','addedTask')
    let child2 = document.createElement("button");
    child2.textContent='X';
    child2.setAttribute('class','delButton')
    child2.setAttribute('id','delete')
    parentDiv.appendChild(child1)
    parentDiv.appendChild(child2)

    console.log(parent);
    task.value = '';

    child2.addEventListener("click",function(){
        parent.removeChild(parentDiv)
    })
})
