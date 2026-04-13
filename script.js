document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Toggle Light/Dark Mode';
    document.body.appendChild(toggleButton);

    let isDarkMode = false;
    toggleButton.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        document.body.style.backgroundColor = isDarkMode ? '#333' : '#FFF';
        document.body.style.color = isDarkMode ? '#FFF' : '#000';
    });
});