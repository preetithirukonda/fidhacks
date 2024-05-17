var bankBalance = 10000;
var salary = 0;

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
        <a href="#" class="btn" onclick="community()">Community</a>
        <a href="#" class="btn" onclick="instate()">Public In-State</a>
        <a href="#" class="btn" onclick="privateschool()">Private</a>
    </div>
`;
}

function community(){
    bankBalance=bankBalance-10;
    document.body.innerHTML = `
    <div class="container">
    <p>Bank Balance: ${bankBalance}</p>
        <a href="#" class="btn" onclick="chap2housing()">Click here to choose housing</a>
    </div>
`;
}

function instate() {
    bankBalance=bankBalance-100;
    document.body.innerHTML = `
    <div class="container">
    <p>Bank Balance: ${bankBalance}</p>
        <a href="#" class="btn" onclick="chap2housing()">Click here to choose housing</a>
    </div>
`;
}

function privateschool () {
    bankBalance=bankBalance-1000;
    document.body.innerHTML = `
    <div class="container">
    <p>Bank Balance: ${bankBalance}</p>
        <a href="#" class="btn" onclick="chap2housing()">Click here to choose housing</a>
    </div>
`;
}

function chap2housing() {
    document.body.innerHTML = `
    <div class="container">
    <p>Bank Balance: ${bankBalance}</p>
        <h1>Make a decision:</h1>
        <p> Buy an apartment: $80</p>
        <p> Buy a house: $500 </p>
        <p> Buy a penthouse: $1000</p>
        <a href="#" class="btn" onclick="apartment()">Apartment</a>
        <a href="#" class="btn" onclick="house()">House</a>
        <a href="#" class="btn" onclick="penthouse()">Penthouse</a>
    </div>
`;
}

function apartment() {
    bankBalance=bankBalance-80;
    document.body.innerHTML = `
    <div class="container">
    <p>Bank Balance: ${bankBalance}</p>
        <a href="#" class="btn" onclick="chap2housing()">Click here to choose housing</a>
    </div>
`;
}

function house() {
    bankBalance=bankBalance-500;
    document.body.innerHTML = `
    <div class="container">
    <p>Bank Balance: ${bankBalance}</p>
        <a href="#" class="btn" onclick="chap2housing()">Click here to choose housing</a>
    </div>
`;
}

function penthouse() {
    bankBalance=bankBalance-1000;
    document.body.innerHTML = `
    <div class="container">
    <p>Bank Balance: ${bankBalance}</p>
        <a href="#" class="btn" onclick="chap2housing()">Click here to choose housing</a>
    </div>
`;
}