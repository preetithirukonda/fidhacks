var bankBalance = 10000;
var cc_salary = 0;
var public_salary = 0;
var private_salary = 0;

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
        <h5><a href="index.html">Landing</a> | <a href="pfresources.html">Personal Finance Resources</a> | <a
        href="game.html">Play the Game</a></h5>

        <h1>
            RiskRise: The Game
        </h1>
    <h3>  <a
        href="file:///Users/preetithirukonda/Documents/GitHub/fidhacks/fidhacks/game.html">Personal Finance </a> | <a href="http://127.0.0.1:5000">Investments</a></h3>
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
        <a>Before going to college, take this quiz to learn about budgeting.</a>
        
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
    cc_salary = 2000;
    document.body.innerHTML = `
    <div class="container">
    <p>Bank Balance: ${bankBalance}</p>
        

        <p>Congrats! You have graduated from college and got your first job! Your salary is: ${cc_salary}</p>
        <p>Your bank balance is now: ${bankBalance=bankBalance+cc_salary}</p>
        <a href="#" class="btn" onclick="chap2housing()">Click here to choose housing</a>
    </div>
`;
}

function instate() {
    bankBalance=bankBalance-100;
    public_salary = 7000;
    document.body.innerHTML = `
    <div class="container">
    <p>Bank Balance: ${bankBalance}</p>

        <p>Congrats! You have graduated from college and got your first job! Your salary is: ${public_salary}</p>
        <p>Your bank balance is now: ${bankBalance=bankBalance+public_salary}</p>
        <a href="#" class="btn" onclick="chap2housing()">Click here to choose housing</a>
    </div>
`;
}

function privateschool () {
    bankBalance=bankBalance-1000;
    private_salary = 7000;
    document.body.innerHTML = `
    <div class="container">
    <p>Bank Balance: ${bankBalance}</p>

        <p>Congrats! You have graduated from college and got your first job! Your salary is: ${private_salary}</p>
        <p>Your bank balance is now: ${bankBalance=bankBalance+private_salary}</p>
        <a href="#" class="btn" onclick="chap2housing()">Click here to choose housing</a>
    </div>
`;
}

function chap2housing() {
    document.body.innerHTML = `
    <div class="container">
    <p>Bank Balance: ${bankBalance}</p>
        <h1>Make a decision:</h1>
        <p> Buy an apartment: $800</p>
        <p> Buy a house: $5000 </p>
        <p> Buy a penthouse: $9000</p>
        <a href="#" class="btn" onclick="apartment()">Apartment</a>
        <a href="#" class="btn" onclick="house()">House</a>
        <a href="#" class="btn" onclick="penthouse()">Penthouse</a>
    </div>
`;
}

function apartment() {
    bankBalance=bankBalance-800;
    document.body.innerHTML = `
    <div class="container">
    <p>Bank Balance: ${bankBalance}</p>

        <a href="#" class="btn" onclick="yearslater()">Advance 45 years</a>
    </div>
`;
}

function house() {
    bankBalance=bankBalance-5000;
    document.body.innerHTML = `
    <div class="container">
    <p>Bank Balance: ${bankBalance}</p>

        <a href="#" class="btn" onclick="yearslater()">Advance 45 years</a>
    </div>
`;
}

function penthouse() {
    bankBalance=bankBalance-9000;
    document.body.innerHTML = `
    <div class="container">
    <p>Bank Balance: ${bankBalance}</p>

        <a href="#" class="btn" onclick="yearslater()">Advance 45 years</a>
    </div>
`;
}

function yearslater() {
    document.body.innerHTML = `
    <div class="container">
    <p>Your total bank balance is: ${bankBalance}</p>
    <p>Thank you for playing the game!</p>
    </div>
`;
}