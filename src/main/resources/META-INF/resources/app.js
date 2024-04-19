// src/main/resources/META-INF/resources/app.js
async function fetchUsers() {
    try {
        const response = await fetch('http://localhost:8080/api/users/all');
        if (!response.ok) throw new Error('Service is unavailable');
        const users = await response.json();
        const userListHTML = users.map(user => `<li>${user.name}</li>`).join('');
        document.getElementById('userList').innerHTML = `<ul>${userListHTML}</ul>`;
        document.getElementById('error').style.display = 'none';
    } catch (error) {
        document.getElementById('userList').innerHTML = '';
        document.getElementById('error').style.display = 'block';
    }
}

// Initial call and set to retry every 5 seconds
fetchUsers();
setInterval(fetchUsers, 5000);
