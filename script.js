const input_field = document.getElementById("input_field")
const task_container = document.getElementById("task_container")
// input field effects
input_field.addEventListener('focus', (e) => {
    e.target.style.border = '1px solid red';
})

input_field.addEventListener('blur', (e) => {
    e.target.style.border = '1px solid blue';
})

// Add button event listener
document.getElementById("add_btn").addEventListener('click', function (event) {
    const input_text = input_field.value
    if (input_text) {
        let div = document.createElement('div')
        div.innerHTML = `
                <p class="itemText">${input_text}</p>
                <div class="">
                <button id="editBtn" class="itemBtn">Edit</button>
                <button id="doneBtn" class="itemBtn">Done</button>
                </div>
            `
        div.setAttribute("class", "item");
        task_container.appendChild(div)
        input_field.value = ""
    }
    else {
        alert("Type Your Task!!!")
    }

})

// remove task only, when click on item div 
// if click on child of item div it will not working   
// task_container.addEventListener('click', (e)=>{
//     console.log(e.target)
//     task_container.removeChild(e.target)
// })
//====================================================
// remove task when click on done button and edit when click edit button.  
task_container.addEventListener('click', (e) => {
    if(e.target.innerHTML=="Done"){
        task_container.removeChild(e.target.parentNode.parentNode)
    }
    else if(e.target.innerHTML=="Edit"){
        let pNode = e.target.parentNode.parentNode.childNodes[1]
        let text = pNode.innerText
        input_field.value = text
        task_container.removeChild(e.target.parentNode.parentNode)
    }
})
