$(document).ready(function(){
    $("form").submit(function(){
     if($("#message").val().length<15){
       alert("Message must be more than 15 characters");
       return false;
     }
      else return true;
      
      
      
    })
  });