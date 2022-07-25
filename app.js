// console.log("hello")
// let addBtn = document.getElementById("addBtn")
// addBtn.addEventListener("click",function(e){

//     let addTxt = document.getElementById("addTxt")
//     let notes = localStorage.getItem("notes");
//     if(notes == null){
//         notesObj = [];
//     }else{
//         notesObj = JSON.parse(notes)
//     }
//     notesObj.push(addTxt.value)
//     localStorage.setItem("notes", JSON.stringify(notesObj))
//     addTxt.value = "";
//     console.log(notesObj)
//     showtodo();
// })
// function showtodo(){
//     let notes = localStorage.getItem("notes");
//     if(notes == null){
//         notesObj = [];
//     }else{
//         notesObj = JSON.parse(notes)
//     }
//     let html = ""
    
//     notesObj.forEach(function(element, index){
//         html += `
//         <div class="todo-card my-2 mx-2 card" style="width: 18rem;">
//             <div class="card-body">
//               <h5 class="card-title">${index+1}</h5>
//               <p>${element}</p>
//               <button class="btn btn-primary">Delete</button>
//             </div>
//           </div>
//         `
//     });
//     let noteslEl = document.getElementById("todo")

//     if(notes.length != 0){
//         noteslEl.innerHTML = html
//     }
// }

/* ***************************************** */
// console.log("hello")
// let addBtn = document.getElementById("addBtn")
// addBtn.addEventListener("click",function(e){

//     let addTxt = document.getElementById("addTxt")
//     let notes = localStorage.getItem("notes");
//     if(notes == null){
//         notesObj = [];
//     }else{
//         notesObj = JSON.parse(notes)
//     }
//     notesObj.push(addTxt.value)
//     localStorage.setItem("notes", JSON.stringify(notesObj))
//     addTxt.value = "";
//     console.log(notesObj)
//     showtodo();
// })
// function showtodo(){
//     let notes = localStorage.getItem("notes");
//     if(notes == null){
//         notesObj = [];
//     }else{
//         notesObj = JSON.parse(notes)
//     }
//     let html = ""
    
//     notesObj.forEach(function(element, index){
//         html += `
//         <div class="todo-card my-2 mx-2 card" style="width: 18rem;">
//             <div class="card-body">
//               <h5 class="card-title">${index+1}</h5>
//               <p>${element}</p>
//               <button class="btn btn-primary">Delete</button>
//             </div>
//           </div>
//         `
//     });
//     let noteslEl = document.getElementById("todo")

//     if(notes.length != 0){
//         noteslEl.innerHTML = html
//     }
// }

/* ***************************************** */

console.log("Hello This is new page")
showTodo();

let addtodoEl = document.getElementById("addBtn")
addtodoEl.addEventListener("click",function(e){
    let addtextEl = document.getElementById("addTxt")
    let addTitle = document.getElementById("addTitle")
    let text = localStorage.getItem("text")
    if(text == null){
        textObj = [];
    }else{
        textObj = JSON.parse(text)
    }
    let myObj = {
        title : addTitle.value,
        text : addtextEl.value,
        date : new Date().getDay()+"/"+new Date().getMonth()+"/"+ new Date().getFullYear()
    }
    textObj.push(myObj)
    localStorage.setItem("text", JSON.stringify(textObj))
    
    addtextEl.value = ""
    addTitle.value = ""
    showTodo();
})
function showTodo(){
    let text = localStorage.getItem("text")
    if(text == null){
        textObj = [];
    }else{
        textObj = JSON.parse(text)
    }
    let htmlContent = ""

    textObj.forEach(function(element, index,) {
        htmlContent += `<div class="todo-card my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${element.title}</h5>
                      <p>${element.text}</p>
                      <br>
                      
                      <small>Created on : ${element.date}</small>
                      <br>
                      <button  onclick="deleteNote(this.id)" id=${index} class="btn btn-primary">Delete</button>
                      
                      
                    </div>
                  </div>
        `
    });
    
    let todoEl = document.getElementById("todo")
    if(textObj.length != 0){
        todoEl.innerHTML = htmlContent

        todoEl.style.color = "Black"
    }else{
        todoEl.innerHTML = `<p> Create A todo using above AddTodo ...</p>`
        todoEl.style.color = "Green"
    }
    

}
function deleteNote(index){
    let text = localStorage.getItem("text")
    if(text == null){
        textObj = [];
    }else{
        textObj = JSON.parse(text)
    }
    textObj.splice(index,1);
    localStorage.setItem("text", JSON.stringify(textObj))

    confirm(`Are you sure ..You are deleting the ToDo `)
    
    showTodo();
   


}

searchEl = document.getElementById("search")
searchEl.addEventListener("input", function(e){
    let val = searchEl.value
    let card = document.getElementsByClassName("todo-card")
    Array.from(card).forEach(function(element){
        let cardText = element.getElementsByTagName("h5")[0].innerText;
        if(cardText.includes(val)){
            element.style.display = "block"
        }else{
            element.style.display = "none"
        }
    })
})


