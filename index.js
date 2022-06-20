var  coins = 0; // нарочно е глобална
 
 
function gameLoop() {
    console.log(`Coins ${coins}`);
    document.getElementById("coinsDisplay").innerText = coins;
}

function incrementCoins() {
    coins++;
}

console.log("Start");
setInterval(gameLoop,1000);

