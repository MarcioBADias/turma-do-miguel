const form = document.querySelector('form');
const result = document.querySelector('.result');

const correctAnswes = ['B','B','A','A'];


form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ];

    userAnswers.forEach((userAnswer, index) => {
        if(userAnswer === correctAnswes[index]){
            score += 25;
        }
    })
    scrollTo(0,0);
    result.classList.remove('d-none');

    let counter = 0;

    const timer = setInterval(()=>{
        if(counter === score){
            clearInterval(timer);
        }
        result.querySelector('span').textContent = `${counter}%`;
        counter++;
    }, 10)
})