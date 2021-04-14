$(document).ready(function(){
$("button").click(function(){
var cat = $.get("https://aws.random.cat/meow");
cat.done(function(response){
$("randomcat").attr("src", response.file);

});
})
})



