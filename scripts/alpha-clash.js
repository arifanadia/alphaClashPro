// function play() {
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')
// }

function continueGame() {

    const alpha = getARandomAlphabet();
    console.log(alpha);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alpha;

    setBackgroundColorById(alpha);


}

function play(){
    hideElementId('home-screen');
    showElementId('play-ground')
    continueGame();
}
