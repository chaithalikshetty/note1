
let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", function(e) {

  let addTitle = document.getElementById("note-title");
  let addTxt = document.getElementById("note-text");
  
    if (addTitle.value == "" || addTxt.value == "") {
        return alert("add note title")
    }

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: addTitle.value,
    text: addTxt.value
  }
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";

  showNotes();
});





function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element, index) {
    html += `
        <div class="note">
            <p class="note-counter">Note ${index + 1}</p>
            <h3 class="note-title"> ${element.title} </h3>
            <p class="note-text"> ${element.text}</p>
            <button id="${index}"onclick="deleteNote(this.id)" class="note-btn">Delete Note</button>
            <button id="${index}"onclick="editNote(this.id)" class="note-btn edit-btn">Edit Note</button>
            <button id="${index}"onclick="backNote(this.id)" class="note-btn bck-btn">backup Note</button>
       
             

          

        </div>
            `;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  
  } else {
    notesElm.innerHTML = `No Notes added`;
  }
}


function deleteNote(index) {

    let Dele = confirm("delete");
    if (Dele == true) {
        let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }

        notesObj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        showNotes();
    }
  
}

// Function to Edit the Note
function editNote(index) {
    let notes = localStorage.getItem("notes");
    let addTitle = document.getElementById("note-title");
    let addTxt = document.getElementById("note-text");

    if (addTitle.value !== "" || addTxt.value !== "") {
      return alert("clear form")
    } 

    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    console.log(notesObj);

    notesObj.findIndex((element, index) => {
      addTitle.value = element.title;
      addTxt.value = element.text;
    })
    notesObj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        showNotes();
}


// let back=document.getElementsByClassName("note-btn bck-btn");
// back[0].addEventListener("click",(e)=>
// {
// e.preventDefault();
// var b=document.querySelectorAll(".card");
// for(var i=0;i<b.length;i++)
// {
// //b[i].style.visibility="visible";
// b[i].style.display="inline-block";
// b[i].querySelector(".check").checked=false;

// }
// });

// function backupNote(id){
//   let back = confirm("backup");
//   if (back== true) {
//     let notes = localStorage.getItem("deletnot");
    
   
//     showNotes();
// }


// function search{
//   let search=document.getElementById('srch');
//   search.addEventListener("input",function(){
//     let inputVal=search.value.toLowercase();
//     console.log(inputVal);
//   Array.from(note).forEach(function(element){
//     let noteTxt=element.getElementByTagname("h3")[0].innerHTML;
//     if(noteTxt.includes(inputVal)){
//       element.style.display="block";

//     } else{
//       element.style.display="none";
//     }
//   })
// })
//}



showNotes();


