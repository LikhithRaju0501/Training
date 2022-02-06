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
    let parentDiv = document.createElement('div')
    parentDiv.setAttribute('class','parentDiv')
    parent.appendChild(parentDiv)
    let len = document.getElementsByClassName('parentDiv').length;
    parentDiv.setAttribute('id',`${len}`)
    let toBeAppended = document.getElementById(`${len}`)
    

    let child1 = document.createElement("div");
    child1.textContent=taskValue;
    child1.setAttribute('class','addedTask')
    let child2 = document.createElement("button");
    child2.textContent='X';
    child2.setAttribute('class','delButton')
    child2.setAttribute('id','delete')
    toBeAppended.appendChild(child1)
    toBeAppended.appendChild(child2)
    child2.setAttribute('onclick',`myFunc(${len})`)

    console.log(parent);
    task.value = '';
})

function myFunc(a){
   let i;
   let temp = parent.firstElementChild;
   let len = document.getElementsByClassName('parentDiv').length;
   if(len==1){
       parent.removeChild(parent.firstElementChild)
       return
   }
 
   if(a==len){
  parent.removeChild(parent.lastElementChild)
   }else{
       let nextEle;
    for(i=0;i<a-1;i++){
        temp = temp.nextElementSibling;
    }
    nextEle = temp;
    for(let j=i+1;j<len;j++){
        nextEle = nextEle.nextElementSibling;
        let num = nextEle.getAttribute('id')
        nextEle.setAttribute('id',`${num-1}`)
        nextEle.lastElementChild.setAttribute('onclick',`myFunc(${num-1})`)
    }
   }
   
//   console.log(parent);
   parent.removeChild(temp)
}



