function open_menu(){
    var x = document.getElementById("menu");
    if(x.style.display == "block"){
        x.style.display = "none"
    }
    else{
        x.style.display = "block"
    }

}

window.onscroll = function() {scrollFunction()};
