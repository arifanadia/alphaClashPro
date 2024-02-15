// function play() {
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')
// }


function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log(playerPressed);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if (playerPressed === expectedAlphabet) {
        console.log('you get a point');
        removeBackgroundColorById(expectedAlphabet);
        continueGame()
    }
    else{
        console.log('you misssed:you lost a life');
    }


}
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame() {

    const alpha = getARandomAlphabet();
    console.log(alpha);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alpha;

    setBackgroundColorById(alpha);


}

function play() {
    hideElementId('home-screen');
    showElementId('play-ground')
    continueGame();
}
