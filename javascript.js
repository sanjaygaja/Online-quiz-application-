function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password=="12345")
    {
        window.location.assign("index.html")
        alert("successfull !")
    }
    else{
        alert("invalid")
    }
}
