

function hideElementId(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementId(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');


}
function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getTextElementValueId(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;

}
function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;

}
function getElementAlphaById(elementId){
    const element =document.getElementById(elementId);
    const alphas = element.innerText;
    return alphas ;

}

function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    const randomNumber = Math.random() * 25;
    const randomIndex = Math.round(randomNumber);

    const alphabet = alphabets[randomIndex];
    // console.log(alphabet);
    return alphabet;
}