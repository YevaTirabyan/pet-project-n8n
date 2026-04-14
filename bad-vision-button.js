document.addEventListener('DOMContentLoaded', function() {
    const badVisionButton = document.createElement('button');
    badVisionButton.innerText = 'Bad Vision';
    document.body.appendChild(badVisionButton);
    let isEnlarged = false;
    badVisionButton.addEventListener('click', function() {
        document.body.style.fontSize = isEnlarged ? 'initial' : '1.5em';
        isEnlarged = !isEnlarged;
    });
});