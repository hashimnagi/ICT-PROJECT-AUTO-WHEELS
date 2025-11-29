renderHeaderFooter();
const root = document.getElementById('root');
root.innerHTML = `
<div class='container'>
<h1>Pricing & Packages</h1>
<div class='pricing-grid'>
<div class='plan'><h3>Basic</h3><div class='muted'>$0 — Free listing</div><p>Community listing</p><button class='btn primary'>Choose</button></div>
<div class='plan'><h3>Premium</h3><div class='muted'>$29/mo</div><p>Featured listing + inspection</p><button class='btn primary'>Choose</button></div>
<div class='plan'><h3>Dealer</h3><div class='muted'>Contact</div><p>Bulk listings</p><button class='btn'>Contact Sales</button></div>
</div>
</div>
`;