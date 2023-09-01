// function that runs when button is clicked
function chat() {
    alert ("Magandang Buhay!")

    const myName = prompt ("What is your name?")
    alert ("Hello, "+ myName + "!")

    const subject = prompt ("Are you single?");
    if (subject == "Yes") {
        alert ("Being a single is awesome!");
    }
    else if (subject == "No") {
        alert ("Kilig!");
    }
    else {
        alert("Cool!");
    }
} // end bracket to close the function

document.getElementById("myBtn").onclick = chat;