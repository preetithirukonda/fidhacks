var bankBalance = 1000;

function startGame() {
    var playerName = prompt("Enter your character's name:");
    if (playerName !== null && playerName !== "") {
        localStorage.setItem("playerName", playerName);
        window.location.href = "game.html";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var playerName = localStorage.getItem("playerName");
    if (playerName) {
        document.body.innerHTML = `
            <div class="container">
                <h1>Welcome, ${playerName}!</h1>
                <p>Age: 18</p>
                <p>Gender: Female</p>
                <p>Bank Balance: ${bankBalance}</p>
                <a href="#" class="btn" onclick="eighteen()">Continue</a>
            </div>
        `;
    } else {
        startGame();
    }
});

function eighteen(){
    document.body.innerHTML = `
    <div class="container">
    <p>Bank Balance: ${bankBalance}</p>
        <h1>Make a decision:</h1>
        <p> Go to community college: $10</p>
        <p> Go to in state public college: $100</p>
        <p> Go to private college: $1000</p>
        <a href="#" class="btn" onclick="eighteen()">Community</a>
        <a href="#" class="btn" onclick="eighteen()">Public In-State</a>
        <a href="#" class="btn" onclick="eighteen()">Private</a>
    </div>
`;
}