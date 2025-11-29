renderHeaderFooter();
const user = DB.currentUser(); if(!user){alert('Please login'); location.href='login.html'}
const root = document.getElementById('root');
root.innerHTML = `
<div class='container'>
<h1>My Dashboard</h1>
<div class='card'>Logged in as <strong>${user.email}</strong> <button id='logout' style='margin-left:12px'>Logout</button></div>
<h3 style='margin-top:18px'>My Favorites</h3>
<div id='favList' class='grid'></div>
</div>
`;
qs('#logout').onclick = ()=>{DB.logout(); location.href='index.html'}
const favs = JSON.parse(localStorage.getItem('aw_favs')||'[]'); const favList = qs('#favList'); favs.forEach(id=>{const v = getVehicleById(id); if(v){const d=document.createElement('div');d.className='card';d.innerHTML=`<div style='font-weight:700'>${v.title}</div><div class='muted'>${v.year} • ${v.km}</div><a href='vehicle-details.html?id=${v.id}'>View</a>`;favList.appendChild(d)}})