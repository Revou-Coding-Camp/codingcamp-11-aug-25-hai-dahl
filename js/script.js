// welcomeSpeech();
//
// Prompts the user for their name and displays it in the element with ID "user-greeting".
function welcomeSpeech() {
    let userName = prompt("Please enter your name:");
    if (userName != '') {
        document.getElementById("user-greeting").textContent = userName;
    }
}

/**
 * Sends the user's question.
 * Alerts the question if provided, otherwise asks the user to enter a question.
 */
function sendQuestion() {
    let question = document.getElementById("question").value;
    if (question != '') {
        alert("Your question has been sent: " + question);
    } else {
        alert("Please enter a question before sending.");
    }
}
