var coins = 0; // нарочно е глобална
var workers = 0;
 
 
function gameLoop() {
    console.log(`Coins ${coins}`);
    addCoins(); // Добавяме в game Loop-а функция за case при който имаме купен работник, който да копае жълтици.
    updateCoinsDisplay()
}

function addCoins(){
    coins += workers;
}

function updateCoinsDisplay () {
    document.getElementById("coinsDisplay").innerText = coins;
}

function incrementCoins() { // Инкрементира с по 1 жълтица
    coins++; 
    updateCoinsDisplay() // За да се променя на всеки клип, а не да рефрешва през 1 сек заради gameLoop-a.
}

function buyWorker() { // Добавяме опция за купуване на работник
    if (coins > 100) {
        coins -=100
        workers ++
    }
}

console.log("Start");
setInterval(gameLoop,1000); // GameLoop на 1 сек. 

