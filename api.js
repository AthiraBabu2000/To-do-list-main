


function ajax(){
    var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if(this.readyState===4&&this.status==200){
        var response=JSON.parse(this.responseText);
        var output="";
        
        for(var i=0;i<response.length;i++){

           var x = document.createElement("INPUT");
        x.setAttribute("type", "checkbox", document.getElementById("demo").innerHTML=output);
        output+="<li>"+response[i].title+"</li>";
            document.body.appendChild(x);

        }
        
           
    }

}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
}

function myFunction() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    document.body.appendChild(x);
    
  }








