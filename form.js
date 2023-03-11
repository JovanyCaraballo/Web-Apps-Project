var modal= document.getElementById("myModal");

var btn= document.getElementById("formBtn");

var span=document.getElementsByClassName("close")[0];

btn.onclick = (event) => {
    event.preventDefault();
    modal.style.display =" block";
}

span.onclick = function(){
    // event.preventDefault();
    modal.style.display="none";
    // window.reload=true;
    location.reload();
}

// window.onclick = function(event){
    // event.preventDefault();
    // modal.style.display="none";
// }