alert('hello');

fetch('/users').then(user => {
    document.getElementById('info-user').textContent = user.name;
})