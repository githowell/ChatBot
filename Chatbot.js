// function that runs when button is clicked
function chat()  {
    alert ("Magandang Buhay!")
    const minAge = 18;
    const maxAge = 65;
  

    const myName = prompt ("What is your name?")
    alert ("Hello, "+ myName + "I have personal question!")

    const subject = prompt ("How old are you?");
    if (subject < minAge) {
        alert ("You are too young, but this is the best time to grind.");
    }
    else if (subject <= maxAge) {
        alert ("You're not too old! Hope you enjoy your younger days!");
    } 
    else {
        alert ("Wow! Congratulations!, You're living the best of your life!");
    }
}
//End bracket to close the function

document.getElementById("myBtn").onclick = chat;