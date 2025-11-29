```javascript
renderHeaderFooter();
const root = document.getElementById('root');
root.innerHTML = `
<div class='container'>
<h1>Login</h1>
<div class='card'>
<label>Email<input id='email'></label>
<label>Password<input id='pass' type='password'></label>
<div style='margin-top:10px'><button id='login' class='btn primary'>Login</button> <a href='signup.html' style='margin-left:8px'>Sign Up</a></div>
</div>
</div>
`;
qs('#login').onclick = ()=>{
const email = qs('#email').value; const pass = qs('#pass').value;
if(DB.login(email, pass)){alert('Logged in'); location.href='profile.html'} else alert('Invalid credentials');
}
