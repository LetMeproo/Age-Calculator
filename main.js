
const birthdayEl = document.getElementById('birthday');
const btnEl = document.getElementById('btn');
const resultEl = document.getElementById('result');

function calcDate ()
{
    const birthdayValue = birthdayEl.value;
    if (birthdayValue === ''){
        alert ('Put Your Birthday')
    }else{
        const age = getAge (birthdayValue)
        resultEl.innerHTML = `Your age is ${age} years old`
    }
}

function getAge(birthdayValue)
{
    const currntDate = new Date();
    const birthDayDate = new Date(birthdayValue)
    let age = currntDate.getFullYear() - birthDayDate.getFullYear()
    let month = currntDate.getMonth() - birthDayDate.getMonth()

    if (month < 0 ){
        age--
    }
    return age;
}

btnEl.addEventListener('click', calcDate)