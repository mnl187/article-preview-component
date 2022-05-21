const box = document.querySelector('.section-second');
const boxElement = document.querySelectorAll('.box-change-element');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    console.log('klik');
    boxElement[0].classList.toggle('hidden');
    boxElement[1].classList.toggle('hidden');
    box.classList.toggle('bgc');
});

