document.querySelectorAll('.copy-btn').forEach(btn=>{
  btn.addEventListener('click', async ()=>{
    const target = document.getElementById(btn.dataset.copyTarget);
    if(!target) return;
    try{
      await navigator.clipboard.writeText(target.innerText.trim());
      const old = btn.textContent;
      btn.textContent = '¡Copiado!';
      setTimeout(()=>btn.textContent = old, 1400);
    }catch(e){
      btn.textContent = 'No se pudo copiar';
      setTimeout(()=>btn.textContent = 'Copiar código', 1400);
    }
  });
});

document.querySelectorAll('.quiz-q').forEach(card=>{
  const answer = card.dataset.answer;
  const fb = card.querySelector('.quiz-feedback');
  card.querySelectorAll('button[data-opt]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const ok = btn.dataset.opt === answer;
      fb.textContent = ok ? '✓ Correcto' : '✗ Revisa la explicación del tema';
      fb.className = 'quiz-feedback ' + (ok ? 'ok' : 'bad');
    });
  });
});
