function ButtonClicked()
{
   document.getElementById("spinup").style.display = "none"; 
  document.getElementById("buttonreplacement").style.display = ""; 
  //gif
  setTimeout(function(){ 
    document.getElementById("spinup").style.display = ""; 
    document.getElementById("buttonreplacement").style.display = "none";
  },2000);

  //modal
  setTimeout(function(){ 
    if (document.getElementById('email').value != "" && document.getElementById('tech').value != ""){
        $("#myModal").modal('show');
        createenvironment()
    }else{
        alert("Please fill in the required fields!");
    }
},2000);
}



// post request
function createenvironment() {
    var xhttp = new XMLHttpRequest();
    xhttp.withCredentials = true
    xhttp.onreadystatechange = function() {
    if (xhttp.readyState === 2) {	
    }
    };
        //get values
        var email = document.getElementById('email').value;
        var tech = document.getElementById('tech').value;;
        console.log(tech);
        xhttp.open('POST', 'https://john.smith:Accenture01@lisa.accenture.com/jenkins/job/DevSecOps/job/ECS_Sonar/buildWithParameters?token=c0Ketz8ORT&ENVIRONMENT='+tech+'&EMAIL='+email, true)
        xhttp.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
        // xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhttp.send();
}