renderHeaderFooter();
const root = document.getElementById('root');
root.innerHTML = `
<div class='container'>
<h1>Available Vehicles</h1>
<div class='filters'>
<input id='q' placeholder='Search title or model' style='padding:8px;border-radius:8px'>
<select id='fuel'><option value=''>Any Fuel</option><option>Petrol</option><option>Diesel</option><option>Electric</option></select>
<select id='sort'><option value='default'>Sort</option><option value='price-asc'>Price ↑</option><option value='price-desc'>Price ↓</option><option value='year-desc'>Year ↓</option></select>
<button id='apply' style='padding:8px'>Apply</button>
</div>
<div class='grid' id='grid'></div>
</div>
`;


const grid = qs('#grid');
function render(list){grid.innerHTML='';list.forEach(v=>{
const d = document.createElement('div'); d.className='card';
d.innerHTML = `<img src='${v.img}' style='width:100%;height:140px;object-fit:cover;border-radius:6px'><div style='margin-top:8px;font-weight:700'>${v.title}</div><div class='muted'>${v.year} • ${v.km} km • ${v.fuel}</div><div style='display:flex;justify-content:space-between;align-items:center;margin-top:8px'><div style='font-weight:800;color:var(--accent)'>${formatPrice(v.price)}</div><a href='vehicle-details.html?id=${v.id}'>View</a></div>`;
grid.appendChild(d);
})}


let list = VEHICLES.slice(); render(list);
qs('#apply').onclick = ()=>{
const q = qs('#q').value.toLowerCase(); const fuel = qs('#fuel').value; const sort = qs('#sort').value;
let out = VEHICLES.filter(v=>v.title.toLowerCase().includes(q) || v.year.toString().includes(q));
if(fuel) out = out.filter(x=>x.fuel===fuel);
if(sort==='price-asc') out.sort((a,b)=>a.price-b.price);
if(sort==='price-desc') out.sort((a,b)=>b.price-a.price);
if(sort==='year-desc') out.sort((a,b)=>b.year-b.year);
render(out);
}


// prefill search from query param
const params = new URLSearchParams(location.search); if(params.get('search')){qs('#q').value = params.get('search'); qs('#apply').click()}
