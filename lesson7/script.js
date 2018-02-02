// proj1
var btn = document.getElementById("button");

btn.addEventListener("click", function(){
    var newRequest = new XMLHttpRequest();
    newRequest.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("change").innerHTML = this.responseText;
        };
    
};
newRequest.open("GET", "info.txt", true);
newRequest.send();
});

