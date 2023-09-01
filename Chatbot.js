// function that runs when button is clicked
function chat()  {
    alert ("Magandang Buhay!")
    const minAge = 18;
    const maxAge = 65;
  

    const myName = prompt ("What is your name?")
    alert ("Hello, "+ myName + "I have personal question!")

    const subject = prompt ("How old are you?");
    if (subject < minAge) {
        alert ("You are too young for this range.");
    }
    else if (subject <= maxAge) {
        alert ("Your age is within the specified range.");
    } 
    else {
        alert ("You are too old for this range.");
    }
}
//End bracket to close the function

document.getElementById("myBtn").onclick = chat;