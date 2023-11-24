const currentFirst = document.getElementById('currentFirst');
const currentSecond = document.getElementById('currentSecond');
const count = document.getElementById('count');
const equal = document.getElementById('equal');
const exchangeRate = document.getElementById('exchangeRate');


updateRate();


function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/9603dc397e87161a9c82ca31/latest/${currentFirst.value}`
    )
    .then((res)=> res.json())
    .then((data) =>{
    console.log(data);
    const rate = data.conversion_rates[currentSecond.value];

    exchangeRate.textContent = `1 ${currentFirst.value} = ${rate} ${currentSecond.value}`;

    equal.textContent = (count.value * rate).toFixed(2);
    });
}

currentFirst.addEventListener('change', updateRate);
currentSecond.addEventListener('change', updateRate);
count.addEventListener('input', updateRate);