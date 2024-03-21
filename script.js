const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        const id = new Date().getTime();
        span.addEventListener("click", (e)=> onItemDelete(e,id));
        li.appendChild(span);
        li.setAttribute("id",id);
        li.addEventListener("click",(e)=> onListItemClick(e,id));
        listContainer.appendChild(li);
    }
    inputBox.value = "";
}

const onListItemClick = (e,id)=> {
    e.preventDefault();
    const item = document.getElementById(id);
    item.classList.toggle("checked");
}

const onItemDelete = (e,id)=> {
    e.preventDefault();
    const item = document.getElementById(id);
    item.remove();
}

// listContainer.addEventListener('click', function(e){
//     console.log("hello");
//     if(e.target.tagname === "LI"){
//         // console.log(e)
//     e.target.classList.toggle("checked");
//     }
//     else if(e.target.tagname === "SPAN")
//     {
//         e.target.parentElement.remove();
//     }
// },false);