// proj3

var button = document.getElementById("learnMore");

button.addEventListener("click", function(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange= function(){
        if (this.readyState == 4 && this.status ==200){
            document.getElementById("text").innerHTML = xhttp.responseText;
        }
    }
    xhttp.open("GET", "proj3.txt", true);
    xhttp.send();
})