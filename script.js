```javascript
document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.createElement('button');
    modeToggle.textContent = 'Toggle Dark/Light Mode';
    document.body.appendChild(modeToggle);

    modeToggle.addEventListener('click', () => {
        if (document.body.style.backgroundColor === 'lightblue') {
            document.body.style.backgroundColor = 'darkblue';
        } else {
            document.body.style.backgroundColor = 'lightblue';
        }
    });

    document.body.style.backgroundColor = 'lightblue'; // Set initial background color
});
```