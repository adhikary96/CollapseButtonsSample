function collFunction() {
    var coll = document.getElementsByClassName("collapsible")
    var i;

    console.log(coll)

    for(i=0; i< coll.length; i++) {
        console.log("i: "+i)
        coll[i].addEventListener("click", function(){
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if(content.style.display === "block"){
                content.style.display="none";
            } else {
                content.style.display = "block";
            }
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}