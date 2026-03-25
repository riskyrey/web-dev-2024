function refreshPlayer() {
    const random1 = Math.floor((Math.random() * 6) + 1)
    const random2 = Math.floor((Math.random() * 6) + 1)

    document.getElementsByClassName("img1")[0].src = `./images/dice${random1}.png`;

    document.getElementsByClassName("img2")[0].src = `./images/dice${random2}.png`;

    if (random1 > random2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
    } else if (random1 < random2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩" }
    else {
        document.querySelector("h1").innerHTML = "Draw!"
    }
}