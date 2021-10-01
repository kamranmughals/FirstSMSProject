

let addbuttons = document.querySelector(".button > .add");
let display = document.querySelector(".display");
let contentarea = document.querySelector(".content-area");
let success = document.querySelector(".area-success");
let show = document.getElementById('hide');
let frm = document.getElementsByName('input-from')[0];
let data = [];

function addrecords(){
    let sname = document.getElementById('name').value || undefined;
    let sfather = document.getElementById('father').value || undefined;
    let sage = document.getElementById('age').value || undefined;
    let sphone = document.getElementById('telephone').value || undefined; 

    let newRecord = '<ul><li id="ans">'+sname+'</li><li id="ans">'+sfather+'</li><li id="ans">'+sage+'</li><li id="ans">'+sphone+'</li></ul>'
    frm.reset();
    if (!newRecord.includes(undefined)) {
        data.push(newRecord);
        success.innerHTML = '<h4 id="alert" > Student has been Added Successfully!! </h4>';
        
    } else {
        success.innerHTML = '<h3> Sorry Try Again!! </h3>';
        
    }
}


function showrecords(){
    show.style.display = "block";
    contentarea.innerHTML = '<span id= "border-round"class="dt">Full name</span><span class="dt">Father Name</span><span class="dt">Age</span><span id="border-round2" class="dt">Roll No</span>'
    for (let row of data){
        contentarea.innerHTML += row;
    }
    
}