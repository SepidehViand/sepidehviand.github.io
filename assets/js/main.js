
function filterWorks(cat){
  const cards = document.querySelectorAll('[data-cat]');
  document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
  document.querySelector(`[data-chip="${cat}"]`).classList.add('active');
  cards.forEach(card=>{
    const k = card.getAttribute('data-cat');
    card.style.display = (cat==='all' || k.indexOf(cat)>=0) ? '' : 'none';
  });
}
