document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get the username and password values from the form
    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;
  
    // Validate the username and password (replace with your actual logic)
    if (username === 'user' && password === 'pass') {
      // Successful login
      alert('Login successful!');
      // Redirect to the home page or another page
      window.location.href = 'dasboard.html';
    } else {
      // Invalid credentials
      alert('Invalid username or password!');
    }
  });