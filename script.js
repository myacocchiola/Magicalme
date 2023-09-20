function italyanswer(){
  var password = document.getElementById("italyquestion");
  var passwordText = password.value;
  if(passwordText=="Italy"){
    return true;
  }
  alert("Incorrect! Try again.")
  return false;
}