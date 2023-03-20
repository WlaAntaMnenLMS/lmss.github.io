const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const privacyPolicy = document.getElementById('privacy-policy').checked;
  

  if (email && password && privacyPolicy) {
    // Perform login action
    console.log('Logged in successfully');
  } else {
    alert('Please fill in all required fields');
  }
});



