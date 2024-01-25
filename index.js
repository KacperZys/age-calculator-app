const button = document.querySelector('.main__button');
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');

day.addEventListener('keydown', e => {

    if (day.value < 1 || day.value > 31) {
        day.classList.add('invalid');
    }
});

month.addEventListener('keydown', e => {
    if (month.value < 1 || month.value > 12) {
        month.classList.add('invalid');
    }
});

year.addEventListener('keydown', e => {
    if (year.value > new Date().getFullYear()) {
        year.classList.add('invalid');
    }
});

button.addEventListener('click', e => {
    const date = Math.abs(new Date() - new Date(year, month, day));

    console.log(new Date(date));

    const dayDisplay = document.querySelector('.days-display');
    const monthDisplay = document.querySelector('.months-display');
    const yearDisplay = document.querySelector('.years-display');
});