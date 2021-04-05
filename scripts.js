

$("#submit").click(function() {
var name = $("#name").val();
var email = $("#email").val();
if (name == '' || email == ''){
    swal({
     title:"There is an empty field!",
     text: "Fill in the required information!", 
     icon: "warning",
     button: "OK",
    });
} else {
    swal({
        title:"Thank you for submitting!",
        icon: "success",
        button: "Thank You!",  
});
}
});