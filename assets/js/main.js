
document.addEventListener('DOMContentLoaded',()=>{
  const buttons=document.querySelectorAll('[data-filter]');
  const cards=document.querySelectorAll('[data-category]');
  buttons.forEach(btn=>{
    btn.addEventListener('click',()=>{
      buttons.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f=btn.dataset.filter;
      cards.forEach(card=>{
        const cat=card.dataset.category;
        const brand=card.dataset.brand;
        card.style.display=(f==='all'||cat===f||brand===f)?'flex':'none';
      });
    });
  });
});
