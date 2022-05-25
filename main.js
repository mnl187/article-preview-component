const box = document.querySelector('.section-second');
const boxElement1 = document.querySelector('.box-change-element1');
const boxElement2 = document.querySelector('.box-change-element2');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    boxElement1.classList.toggle('hidden');
    boxElement2.classList.toggle('hidden');
    box.classList.toggle('bgc');
});

