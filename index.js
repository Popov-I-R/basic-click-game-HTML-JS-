var coins = 0; // нарочно е глобална
var workers = 0;
 
 
function gameLoop() {
    addCoins(); // Добавяме в game Loop-а функция за case при който имаме купен работник, който да копае жълтици.
    updateCoinsDisplay();
    updateWorkerDisplay ();
}

function addCoins(){
    coins += workers / 10;
}

function updateCoinsDisplay () {
    document.getElementById("coinsDisplay").innerText = coins.toFixed(0);
}

function updateWorkerDisplay () {
    document.getElementById("workersDisplay").innerText = workers;
}

function incrementCoins() { // Инкрементира с по 1 жълтица
    coins++; 
    updateCoinsDisplay() // За да се променя на всеки клип, а не да рефрешва през 1 сек заради gameLoop-a.
}

function buyWorker() { // Добавяме опция за купуване на работник
    if (coins >= 20) {
        coins -=20;
        workers ++;
    }
}

console.log("Start");
setInterval(gameLoop,100); // GameLoop на 1 сек. 

