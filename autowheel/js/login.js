// Shorthand function for querySelector
const qs = (selector) => document.querySelector(selector);

// Make sure DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

  // Render header and footer if you have that function
  if (typeof renderHeaderFooter === 'function') renderHeaderFooter();

  // Get root element
  const root = document.getElementById('root');
  if (!root) {
    console.error("No element with id 'root' found!");
    return;
  }

  // Insert login form HTML
  root.innerHTML = `
    <div class='container'>
      <h1>Login</h1>
      <div class='card'>
        <label for='email'>Email</label>
        <input id='email' type='email'>
        <label for='pass'>Password</label>
        <input id='pass' type='password'>
        <div style='margin-top:10px'>
          <button id='login' class='btn primary'>Login</button>
          <a href='signup.html' style='margin-left:8px'>Sign Up</a>
        </div>
      </div>
    </div>
  `;

  // Add click event to login button
  const loginBtn = qs('#login');
  if (loginBtn) {
    loginBtn.onclick = () => {
      const email = qs('#email').value.trim();
      const pass = qs('#pass').value.trim();

      // Check DB object safely
      if (typeof DB !== 'undefined' && typeof DB.login === 'function') {
        if (DB.login(email, pass)) {
          alert('Logged in');
          location.href = 'profile.html';
        } else {
          alert('Invalid credentials');
        }
      } else {
        console.error('DB.login() function not found!');
        alert('Login system not available.');
      }
    };
  } else {
    console.error('Login button not found!');
  }

});
