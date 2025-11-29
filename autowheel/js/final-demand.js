renderHeaderFooter();
const root = document.getElementById('root');
const params = new URLSearchParams(location.search); const id = params.get('id');
const v = getVehicleById(id) || VEHICLES[0];
root.innerHTML = `
<div class='container'>
<h1>Final Demand — Place your order</h1>
<div class='form'>
<label>Full Name<input id='name'></label>
<label>Email<input id='email' type='email'></label>
<label>Phone<input id='phone'></label>
<label>Vehicle<input id='vehicle' value='${v.title}'></label>
<label>Price<input id='price' value='${formatPrice(v.price)}'></label>
<label>Message<textarea id='msg'></textarea></label>
<div style='margin-top:10px'><button id='submit' class='btn primary'>Confirm Order</button></div>
</div>
</div>
`;
qs('#submit').onclick = ()=>{
const order = {id:'ord_'+Date.now(), name:qs('#name').value || 'Guest', email:qs('#email').value, phone:qs('#phone').value, vehicle:qs('#vehicle').value, price:qs('#price').value, date:new Date().toISOString()};
DB.placeOrder(order); alert('Order placed. Our team will contact you. Order ID: '+order.id); location.href='index.html';
}
