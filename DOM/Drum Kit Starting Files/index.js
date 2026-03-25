const numberOf = document.querySelectorAll('.drum').length;

for (let i = 0; i < numberOf; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        const buttonText = this.innerHTML;
        playDrum(buttonText);
        addActiveButton(buttonText)
    })
}


document.addEventListener('keydown', function (event) {
    playDrum(event.key)
    addActiveButton(event.key)
})

function playDrum(key) {
    let source;
        switch (key) {
            case 'w': {
                source = './sounds/tom-1.mp3';
                break;
            }
            case 'a': {
                source = './sounds/tom-2.mp3';
                break;
            }
            case 's': {
                source = './sounds/tom-3.mp3';
                break;
            }
            case 'd': {
                source = './sounds/tom-4.mp3';
                break;
            }
            case 'j': {
                source = './sounds/snare.mp3';
                break;
            }
            case 'k': {
                source = './sounds/crash.mp3';
                break;
            }
            case 'l': {
                source = './sounds/kick-bass.mp3';
                break;
            }
            default: {
                console.log('unknown')
            }
        }

        const audio = new Audio(`${source}`)
        audio.play()
}

function addActiveButton(currentKey) {
    const buttons = ['w', 'a', 's', 'd', 'j', 'k', 'l']

    if (buttons.includes(currentKey)) {
        document.querySelector(`.${currentKey}`).classList.add('pressed');
        
        setTimeout(() => {
            document.querySelector(`.${currentKey}`).classList.remove('pressed');
        }, 100)
    }
}