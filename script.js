

let addbuttons = document.querySelector(".button > .add");
let display = document.querySelector(".display");
let contentarea = document.querySelector(".content-area");
let success = document.querySelector(".area-success");
let show = document.getElementById('hide');
let frm = document.getElementsByName('input-from')[0];
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
        records = '<ul><li id="ans">'+sname+'</li><li id="ans">'+sfather+'</li><li id="ans">'+sage+'</li><li id="ans">'+sphone+'</li></ul>'
        displayed.push(records);
        success.innerHTML = '<h4 id="alert" > Student has been Added Successfully!! </h4>';
    }
    else if(records != data){
        success.innerHTML = '<h3> Sorry Try Again!! </h3>';
    }
    frm.reset();
    return false;
}
function showrecords(){
    show.style.display = "block";
    contentarea.innerHTML = '<span id= "border-round"class="dt">Full name</span><span class="dt">Father Name</span><span class="dt">Age</span><span id="border-round2" class="dt">Roll No</span>'
    if(displayed.length == 0){
    } else{
        for (let row of displayed){
            contentarea.innerHTML += row;
        }
    }

}