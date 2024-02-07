
let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', function () {
    console.log('hej');
)};

const btn = document.getElementById('btn')
let counter = 0;
btn.addEventListener('click', () => {
    counter++;
    btn.textContent = counter
})