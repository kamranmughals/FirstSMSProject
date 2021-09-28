

let addbuttons = document.querySelector(".buttons > .add");
let display = document.querySelector(".buttons > .display");
let contentarea = document.querySelector(".content-area")

addbuttons.addEventListener("click", () => {
    addrecords();
});
display.addEventListener("click", () => {
    showrecords();
});

let displayed = [];
let data = [];

function addrecords(){
    let sname = document.getElementById('name').value;
    let sfather = document.getElementById('father').value;
    let sage = document.getElementById('age').value;
    let sphone = document.getElementById('telephone').value;
    for(let x = 0; x < data.length; x++){
        sname += data[x];
        sfather += data[x];
        sage += data[x];
        sphone += data[x];
    }
    let records = data;
    if(records){
        let newrecords = '<ul> <li>' + sname + '</li> <li>' + sfather + '</li> <li>' + sage + '</li> <li>' + sphone + '</li></ul>';
        displayed.push(newrecords);
        contentarea.innerHTML = '<h3> Success!! </h3>';
    } else{
        contentarea.innerHTML = '<h3> No record found!! </h3>';
    }
   
}
function showrecords(){
    contentarea.innerHTML = "";
    if(displayed.length == 0){
    } else{
        for (let row of displayed){
            contentarea.innerHTML += row;
        }
    }

}