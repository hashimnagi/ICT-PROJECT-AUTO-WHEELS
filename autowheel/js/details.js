renderHeaderFooter();
const root = document.getElementById('root');
const params = new URLSearchParams(location.search); const id = params.get('id');
const v = getVehicleById(id) || VEHICLES[0];
root.innerHTML = `
<div class='container'>
<div style='display:flex;gap:20px'>
<div class='gallery'>
<img src='${v.img}' alt='${v.title}'>
</div>
<div class='summary'>
<h1>${v.title}</h1>
<div class='muted'>${v.year} • ${v.km} km • ${v.fuel}</div>
<div style='margin-top:10px;font-weight:900;font-size:22px;color:var(--accent)'>${formatPrice(v.price)}</div>
<div class='features' id='feat'></div>
<div style='margin-top:12px'>
<button id='quote' class='btn primary' style='padding:10px 14px'>Request Final Quote</button>
<button id='fav' class='btn' style='margin-left:8px;padding:10px 14px'>Add to Favorites</button>
</div>
</div>
</div>
</div>
`;
const feat = qs('#feat'); v.features.forEach(f=>{const c=document.createElement('div');c.className='chip';c.textContent=f;feat.appendChild(c)});
qs('#quote').onclick = ()=>{location.href = `final-demand.html?id=${v.id}`}
qs('#fav').onclick = ()=>{const favs = JSON.parse(localStorage.getItem('aw_favs')||'[]'); if(!favs.includes(v.id)){favs.push(v.id);localStorage.setItem('aw_favs', JSON.stringify(favs)); alert('Added to favorites')} else alert('Already in favorites')}
