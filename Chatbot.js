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

    const subject2 = prompt ("What can you say about me? I will count the characters (please try to limit in 150 characters)");
    alert ("You have written " + subject2.length +" characters" +"you only have " + (150-subject2.length) + " remaining characters");
}
//End bracket to close the function

document.getElementById("myBtn").onclick = chat;