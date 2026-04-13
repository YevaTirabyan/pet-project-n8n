<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
    <script src="button.js" defer></script>
    <title>Document</title>
</head>
<body>
<header>
    <h1>Hello, world!</h1>
</header>
</body>
</html>

body {
    font-family: Arial, sans-serif;
    background-color: white;
    color: black;
}

body.dark {
    background-color: black;
    color: white;
} 

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Toggle Dark Mode';
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });
}); 

const button = document.createElement('button');
button.innerText = 'Click Me!';
document.body.appendChild(button);

button.addEventListener('click', () => {
    alert('Button was clicked!');
});