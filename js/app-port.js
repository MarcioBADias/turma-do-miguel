const form = document.querySelector('form');
const result = document.querySelector('.result');
const correctAnswes = ['B','C','A','A'];

let score = 0;
let counter = 0;

const getUsersAnswes = () => correctAnswes.map((_,index) => 
    form[`inputQuestion${index+1}`].value);

const calculateUserScore = (userAnswers) => {
    userAnswers.forEach((userAnswer, index) => {
        if(userAnswer === correctAnswes[index]){
            score += 25;
        }
    })
}

const showResultScore = () => {
    scrollTo(0,0);
    result.classList.remove('d-none');
}

const animatedScore =() => {
    const timer = setInterval(()=>{
        if(counter === score){
            clearInterval(timer);
        }
        result.querySelector('span').textContent = `${counter}%`;
        counter++;
    }, 10)
}

const resultAnswes = e => {
    e.preventDefault();
    const userAnswers = getUsersAnswes();
    calculateUserScore(userAnswers);
    console.log(score)
    showResultScore();
    animatedScore();
}

form.addEventListener('submit', resultAnswes)