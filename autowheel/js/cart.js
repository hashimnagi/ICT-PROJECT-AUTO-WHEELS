renderHeaderFooter();
const root = document.getElementById('root');
const items = JSON.parse(localStorage.getItem('aw_cart')||'[]');
root.innerHTML = `<div class='container'><h1>Saved Vehicles</h1><div id='list'></div></div>`;
const list = qs('#list'); if(items.length===0) list.innerHTML='<div class="muted">No saved vehicles</div>';
items.forEach(id=>{const v = getVehicleById(id); if(v){const d=document.createElement('div');d.className='item';d.innerHTML=`<div style='display:flex;justify-content:space-between;align-items:center'><div><div style='font-weight:700'>${v.title}</div><div class='muted'>${v.year} • ${v.km}</div></div><div><a href='vehicle-details.html?id=${v.id}'>View</a> <button data-id='${v.id}' class='remove'>Remove</button></div></div>`;list.appendChild(d)}})
qsa('.remove').forEach(b=>b.onclick = e=>{const id=e.target.dataset.id; const arr = JSON.parse(localStorage.getItem('aw_cart')||'[]').filter(x=>x!==id); localStorage.setItem('aw_cart',JSON.stringify(arr)); location.reload();})