function TextUp(){
    var h3Elements = document.querySelectorAll("*");
for(var i = 0; i < h3Elements.length; i++) {
    if (h3Elements[i].tagName.toLowerCase()=="h1") {}
    else if (h3Elements[i].tagName.toLowerCase()=="h2") {}
    else {
        h3Elements[i].style.fontSize = "16px";
        var hElements = document.querySelectorAll(".address_list1");
        for(var j = 0; j< hElements.length; j++){
            hElements[j].classList.remove("address_list1")
            console.log(j)
        }
    }
    
}

}

function TextUp2(){
    var h3Elements = document.querySelectorAll("*");
for(var i = 0; i < h3Elements.length; i++) {
    if (h3Elements[i].tagName.toLowerCase()=="h1") {}
    else if (h3Elements[i].tagName.toLowerCase()=="h2") {}
    else {
        h3Elements[i].style.fontSize = "20px";
        var hElements = document.querySelectorAll(".address_list");
        for(var j = 0; j< hElements.length; j++){
            hElements[j].classList.add("address_list1")
            console.log(j)
        }
} 
}
}

function TextUp3(){
    var h3Elements = document.querySelectorAll("*");
for(var i = 0; i < h3Elements.length; i++) {
    if (h3Elements[i].tagName.toLowerCase()=="h1") {}
    else if (h3Elements[i].tagName.toLowerCase()=="h2") {}
    else {
        h3Elements[i].style.fontSize = "24px";
        var hElements = document.querySelectorAll(".address_list");
        for(var j = 0; j< hElements.length; j++){
            hElements[j].classList.add("address_list1")
            console.log(j)
        }
    } 
    
}
}

function MoodChange(){
    var body = document.body;
    body.classList.toggle('dark-mode'); 
}