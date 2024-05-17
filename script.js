/*const openBtn = document.getElementById("create-character");
const closeBtn = document.getElementById("close-character-name")
const character = document.getElementById("character")

openBtn.addEventListener("click", () => {
character.classList.add("open")
});

closeBtn.addEventListener("click", () => {
    character.classList.remove("open")
    });
    */
document.getElementById('create-character').addEventListener('click', function () {
    document.getElementById('popup-1').classList.add('active');
});

document.getElementById('close-character-name').addEventListener('click', function () {
    var name = document.getElementById('name').value;
    console.log('Name entered:', name);
    document.getElementById('popup-1').classList.remove('active');
});

document.querySelector('.close-btn').addEventListener('click', function () {
    document.getElementById('popup-1').classList.remove('active');
});
