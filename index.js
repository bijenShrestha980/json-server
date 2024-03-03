const getUser = () => fetch('http://localhost:3000/users')
  .then(response => response.json())
  .then(users => {
    let usersContainer = document.getElementById('users');
    users.forEach(user => {
      let userElement = document.createElement('div');
      userElement.innerHTML = `<h4>${user.name}</h4><p>${user.email}</p>`;
      usersContainer.appendChild(userElement);
    });

  }).catch((error) => {
    console.error('Error:', error);
  });

const postUser = () => {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var userData = {
    name: name,
    email: email
  };
  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then(response => response.json())
    .then(user => console.log(user))
    .catch((error) => {
      console.error('Error:', error);
    });
}

window.onload = getUser;