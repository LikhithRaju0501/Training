let btn=document.getElementById('btn')
let task = document.getElementById('inputTask')
let parent = document.getElementById('parent')

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let taskValue = task.value;
    if(taskValue ==='') {
        alert("Empty Task");
        return
    }
    let child1 = document.createElement("div");
    child1.textContent=taskValue;
    child1.setAttribute('class','addedTask')
    let child2 = document.createElement("button");
    child2.textContent='Delete';
    child2.setAttribute('class','delButton')
    child2.setAttribute('id','delete')
    parent.appendChild(child1)
    parent.appendChild(child2)
    let len = document.getElementsByClassName('delButton').length*2;
    child2.setAttribute('onclick',`myFunc(${len})`)
    task.value = '';
})

function myFunc(a){
    let i;
    let len=document.getElementsByClassName('delButton').length*2;
    if(a==len){
        parent.removeChild(parent.lastElementChild.previousElementSibling)
        parent.removeChild(parent.lastElementChild)
    }else{
        let toBeDel = parent.firstElementChild;
        let nextSib;
        for(i=0;i<a-1;i++){
            toBeDel = toBeDel.nextElementSibling;
        }
        nextSib = toBeDel;
        for(j=i+2;j<=len;j++){
        nextSib=nextSib.nextElementSibling;
        if(j%2==0){
            nextSib.setAttribute('onclick',`myFunc(${j-2})`)
        }
        }
        
        parent.removeChild(toBeDel.previousElementSibling)
        parent.removeChild(toBeDel)
       
    }
}



