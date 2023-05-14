const h1 = document.querySelector('h1');
const button = document.querySelector('button');

const randomColor = () => {
    const r = Math.floor(Math.random() * 255 + 1);
    const g = Math.floor(Math.random() * 255 + 1);
    const b = Math.floor(Math.random() * 255 + 1);  
    return `rgb(${r}, ${g}, ${b})`;
}

button.addEventListener('click', () => {
    document.body.style.backgroundColor = randomColor();
    h1.innerText = randomColor();
});