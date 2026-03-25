const buttonColours = ["green", "red", "yellow", "blue"]
let gamePattern = []
let userClickedPattern = [];
let started = false;
let level = 0;

$(".btn" ).on( "click", function() {
    if (started) {
        const userChosenColour = $(this).attr('id');
        userClickedPattern.push(userChosenColour);
        playAudio(userChosenColour);
        animatePress(userChosenColour);

        const userClickedPatternLength = userClickedPattern.length
        if (userClickedPattern.length <= gamePattern.length) checkSequence(userClickedPatternLength-1);
    }
});

$(document).on('keypress',function(e) {
    if (!started) {
        $('#level-title').text(`Level ${level}`);
        nextSequence();

        started = true;
    }
});

function checkSequence(i) {
    if (userClickedPattern.length !== gamePattern.length) {
        if (gamePattern[i] === userClickedPattern[i]) return;
        else gameOver();
    } else {
        if (JSON.stringify(gamePattern) === JSON.stringify(userClickedPattern)) {
            userClickedPattern = [];
            setTimeout(function () {
                nextSequence();
            }, 1000)
        } else {
            gameOver()
        }
    }
}

function gameOver() {
    started = false;
    $('#level-title').text('Game Over, Press Any Key to Restart');
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    playAudio('wrong');
    animateGameOver();
}

function nextSequence() {
    level++;
    const max = 3;
    const randomNumber = Math.floor(Math.random() * (max + 1));

    const randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    animatePress(randomChosenColour);

    $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
    $('#level-title').text(`Level ${level}`);

    playAudio(randomChosenColour);
}

function animatePress(currentColour) {
    $('#' + currentColour).addClass('pressed').dequeue().delay(100).queue(function() {
        $(this).removeClass('pressed')
    });
}

function animateGameOver() {
    $('body').addClass('game-over').dequeue().delay(200).queue(function() {
        $(this).removeClass('game-over')
    });
}

function playAudio(buttonColour) {
    const audio = new Audio('./sounds/' + buttonColour + '.mp3')
    audio.play()
}
