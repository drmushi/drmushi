$(document).ready(function(){
    $("form").click(function(){
        event.preventDefault ();
        var webform = $.post("https://maker.ifttt.com/trigger/webform/with/key/1g3z2HSArrsyL9lDjhtVf", JSON.stringify({"value1":$("#name").val(), "value2": $("#email").val(), "value3": $("#message").val()}));
    });
})