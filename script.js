function showMessage() {
    let name = document.getElementById("nameInput").value;
    if (name) {
        document.getElementById("message").innerText = `Happy Valentine's Day, ${name}! ❤️ You are special!`;
    } else {
        document.getElementById("message").innerText = "Please enter your name!";
    }
}

function loveQuiz() {
    let results = [
        "You are a Romantic Dreamer! 💕",
        "You are a Charming Lover! 😍",
        "You are a Sweetheart! 🥰",
        "You are a Secret Admirer! 😘"
    ];
    let randomResult = results[Math.floor(Math.random() * results.length)];
    document.getElementById("quizResult").innerText = randomResult;
}
