

  
//   Two function for validation of the form sign in and sing up (){




function validate_signUp (){
  var name = document.getElementById("name").value;
  var fir_name = document.getElementById("namee").value;
  var mail = document.getElementById("mail").value;
  var pass = document.getElementById("password").value;


  if(mail.indexOf("@") == -1 || mail.length < 6 || mail.indexOf(".") == -1 ){
    alert ("Please Enter valid mail");
      return false;
  }
 if(pass.length < 5){
    alert ("Please Enter valid pass");
        return false;
  }
  alert("Form Submitted Successfully!");

  window.location.assign("index2.html")
  return true;
}



function valid_log(){
  var email_user= document.getElementById("username").value;
  var pass = document.getElementById("password").value;
   if (email_user === "") {
    alert ("Please enter your e-mail ");
    return false;
   }
   if (pass === ""){
    alert ("Enter your password")
    return false;
   }
   alert ("Welcome")
   return true;
}