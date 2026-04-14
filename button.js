const rainbowButton = document.createElement('button');
rainbowButton.innerText = 'Rainbow';
rainbowButton.classList.add('button');
document.body.appendChild(rainbowButton);

const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'];
let index = 0;

rainbowButton.addEventListener('click', () => {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
});