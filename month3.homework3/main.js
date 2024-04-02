document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;


    var data = {
        name: name,
        password: password
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('отправлено:', data);
        alert('отправлено');
    })
    .catch((error) => {
        console.error('ошибка:', error);
        alert('ошибка отправки!');
    });
});