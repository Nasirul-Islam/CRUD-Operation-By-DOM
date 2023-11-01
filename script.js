const input_field = document.getElementById("input_field")
// input field effects
input_field.addEventListener('focus', (e)=>{
    console.log(e.target)
    e.target.style.border = '1px solid red';
})

input_field.addEventListener('blur', (e)=>{
    console.log(e.target)
    e.target.style.border = '1px solid blue';
})

// Add button event listener
document.getElementById("add_btn").addEventListener('click', function (event) {
    const task_container = document.getElementById("task_container")
    const input_text = input_field.value
    if (input_text) {
        let div = document.createElement('div')
        div.innerHTML = `
                <p class="itemText">${input_text}</p>
                <div class="">
                    <button id="doneBtn" class="itemBtn">Done</button>
                    <button id="editBtn" class="itemBtn">Edit</button>
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

// Done button event listener 
document.getElementById("doneBtn").addEventListener