renderHeaderFooter();
const root = document.getElementById('root');
root.innerHTML = `
<div class='container'>
<h1>Create Account</h1>
<div class='card'>
<label>Full Name<input id='name'></label>
<label>Email<input id='email'></label>
<label>Password<input id='pass' type='password'></label>
<div style='margin-top:10px'><button id='create' class='btn primary'>Create Account</button> <a href='login.html' style='margin-left:8px'>Login</a></div>
</div>
</div>
`;
qs('#create').onclick = ()=>{
const u={name:qs('#name').value,email:qs('#email').value,password:qs('#pass').value};
const users = DB.getUsers(); if(users.find(x=>x.email===u.email)){alert('Email used');return}
DB.saveUser(u); localStorage.setItem(DB.authKey, JSON.stringify({email:u.email})); alert('Account created'); location.href='profile.html';
}
