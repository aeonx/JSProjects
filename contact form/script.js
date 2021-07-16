function validation(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var country = document.getElementById("country").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message").value;
    var text;

    error_message.style.padding = "5px";

    if(name.length < 3){
        text = "Please enter a valid name.";
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please enter a valid email.";
        error_message.innerHTML = text;
        return false;
    }

    alert("Your form has been submitted successfully!")
    return true;
}