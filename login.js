function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin"&& password=="12345"){

  
      window.open("fetch.html");
      return false;
    }
    else
    {
        alert("Incorrect Username or Password");
        return true;
    }

}