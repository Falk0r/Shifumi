// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
console.log("hello");

const choices = document.querySelector('.player1').querySelectorAll('img');

document.querySelector('.player1').addEventListener('click', (el) => {
    el = Number(el.target.dataset.choice);

    for (let index = 0; index < choices.length; index++) {
        const element = choices[index];
        if (Number(element.dataset.choice) != el) {
            element.classList.add('opacity')
        }
    }

    battle(el);
})

function random() {
    var nb = Math.floor(Math.random()*3) + 1;
    return nb;
}

function battle(player1) {
    player2 = random();
    imgPlayer2(player2);
    var result;
    if (player1 == player2) {
        console.log('match nul');
    } else {
        switch (true) {
            case player1 == 1 && player2 == 3: 
                result = "win";
                break;
            case player1 == 2 && player2 == 1: 
                result = "win";
                break;
            case player1 == 3 && player2 == 2: 
                result = "win";
                break;
            default:
                result = "loose"
                break;
        }
    }
    console.log(result);
    var showResult = document.getElementById('result');
    
    if (result == 'win') {
        showResult.innerHTML = "WIN";
        score1();
    } else if (result == 'loose') {
        showResult.innerHTML = 'LOOSE';
        score2();
    } else {
        showResult.innerHTML = 'DRAW';
    }

    setTimeout(refresh, 700);
    return result;
}

function imgPlayer2(player2) {
    var img = document.getElementById('player2');

    switch (player2) {
        case 1:
            img.setAttribute('src', './assets/pierre.png');
            break;
        case 2:
            img.setAttribute('src', './assets/papier.png');
            break;
        case 3:
            img.setAttribute('src', './assets/ciseaux.png');
            break;
        default:
            break;
    }
}

function score1() {
    var score = document.getElementById('score1');
    score.innerText = Number(score.innerText) + 1;
    if (score.innerText == 3) {
        endGame(true);
    }
}

function score2() {
    var score = document.getElementById('score2');
    score.innerText = Number(score.innerText) + 1;
    if (score.innerText == 3) {
        endGame(false);
    }
}

function refresh() {
    var img = document.getElementById('player2');
    img.setAttribute('src', '');
    document.getElementById('result').innerHTML = "";
    for (let index = 0; index < choices.length; index++) {
        const element = choices[index];
        element.classList.remove('opacity')
    }
    
}

function endGame(result) {
    document.getElementById('result').innerHTML = "";
    document.querySelector('.battle').classList.toggle('none')

    if (result) {
        document.querySelector('.result img').setAttribute('src', './assets/win.jpg');
        let myNotification = new Notification('Shifumi', {
            body: 'TU AS GAGNE OMG !!!, va te reposer...',
            urgency: "critical"
          })
        

    } else {
        document.querySelector('body').classList.toggle('loose');
        document.querySelector('h2 span').classList.add('red');
        document.querySelector('.result img').setAttribute('src', './assets/loose.gif');
    }
    document.querySelector('.result').classList.toggle('none')
}


document.getElementById('retry').addEventListener('click', () => {
    document.querySelector('body').classList.remove('loose');
    document.querySelector('.result').classList.toggle('none')
    document.querySelector('h2 span').classList.remove('red');
    document.querySelector('.battle').classList.toggle('none')
    document.getElementById('score1').innerText = 0;
    document.getElementById('score2').innerText = 0;
});