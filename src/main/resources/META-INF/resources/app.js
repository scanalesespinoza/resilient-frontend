// src/main/resources/META-INF/resources/app.js
async function fetchUsers(host,port) {
    try {
        const response = await fetch("https://"+host+":"+port+"/api/users/all");
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

function loadEnv(envString) {
    const envVariables = envString.trim().split('\n');
    const env = {};

    envVariables.forEach(variable => {
      const [key, value] = variable.split('=');
      if (key && value) {
        env[key.trim()] = value.trim();
      }
    });

    return env;
  }

  fetch('env')
  .then(response => response.text())
  .then(async envFileContent => {
    console.log(envFileContent);
    const env = loadEnv(envFileContent);

    const port = env.PORT;
    console.log(port);
    const host = env.HOST;
    console.log(host);

    // Initial call and set to retry every 5 seconds
    fetchUsers(host,port);
    setInterval(fetchUsers, 5000);

  })
  .catch(error => console.error('Error loading env file:', error));

