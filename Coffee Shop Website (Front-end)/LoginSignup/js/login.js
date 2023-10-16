const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent default form submission behavior

  const username = document.getElementById('user_login').value;
  const password = document.getElementById('password').value;

  // Check if the entered username and password are correct
  if (username === 'User' && password === 'user123') {
    window.location.href = '../../User/user.html';
    return; // Redirect to the desired page
  } 
  
  
  if (username === 'Chef' && password === 'chef123') {
    window.location.href = '../../Chef/chef.html';
    return; // Redirect to the desired page
  }
  
  
  if (username === 'Admin' && password === 'admin123') {
    window.location.href = '../../Admin/admin.html';
    return; // Redirect to the desired page
  }
  
  
    const error = document.getElementById('error');
    error.innerHTML = 'Incorrect username or password. Please try again.';
});
