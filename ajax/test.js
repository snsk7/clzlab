function ajaxdoc(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        document.getElementById("s").innerHTML = 
    }

    xhttp.open("get","test.xml",true);
    xhttp.send();
}