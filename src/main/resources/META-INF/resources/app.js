// src/main/resources/META-INF/resources/app.js
async function fetchUsers() {
    try {
        const response = await fetch('http://localhost:8080/users/all');
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
const eventSource = new EventSource('http://localhost:8080/stream');
eventSource.onmessage = function(event) {
    console.log('Received message:', event.data);
    // Update the UI or take other actions based on the event data
};

eventSource.onerror = function() {
    console.log('Error receiving SSE');
    // Handle errors or try to reconnect
};

// Initial call and set to retry every 5 seconds
fetchUsers();
setInterval(fetchUsers, 5000);
