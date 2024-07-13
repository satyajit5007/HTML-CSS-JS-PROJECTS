let btn = document.getElementById("button");
let title = document.getElementById("usertitle")
let text = document.getElementsByTagName("textarea")[0];
let color  = document.getElementById("colorcode");
let note = document.getElementById("note_container");
console.log(btn, text , color, title)



function addnote(){
    if(text.value === ""){
        alert("Enter some text in it")
        return;
    }
    hideline.innerText="";

    let div = document.createElement("div");
    let titlel = document.createElement("h3");
    let p = document.createElement("p");
    let cross_btn = document.createElement("button");

    div.appendChild(titlel);
    div.appendChild(p);
    div.appendChild(cross_btn);

    cross_btn.innerText = "X";
    titlel.innerText= title.value;
    p.innerText = text.value;
    div.style.background = color.value;
    note.appendChild(div)
    console.log(div)

    text.value="";
    title.value="";

    cross_btn.addEventListener("click", function(){
        div.style.display="none";
    })

}
btn.addEventListener("click", addnote);

function changecolor(){
    text.style.backgroundColor=color.value
    console.log("color")
}
color.addEventListener("change",changecolor );