// Control de Idioma
function setLanguage(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.innerText = el.getAttribute(`data-${lang}`);
  });
  
  // Estilo de botones
  document.getElementById('btn-en').className = lang === 'en' ? 'px-3 py-1 rounded bg-blue-600 transition' : 'px-3 py-1 rounded transition text-slate-400';
  document.getElementById('btn-es').className = lang === 'es' ? 'px-3 py-1 rounded bg-blue-600 transition' : 'px-3 py-1 rounded transition text-slate-400';
}

// Funcionalidad de Acordeón (Trayectoria)
function toggleExp(btn) {
  const card = btn.parentElement;
  const isOpen = card.classList.contains('active');
  document.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
  if (!isOpen) card.classList.add('active');
}

// Contador de Likes y Vistas (Simulado con LocalStorage)
let likes = parseInt(localStorage.getItem('ss_likes') || 85);
let views = parseInt(localStorage.getItem('ss_views') || 240) + 1;

document.getElementById('like-count').innerText = likes;
document.getElementById('view-count').innerText = views;
localStorage.setItem('ss_views', views);

function addLike() {
  likes++;
  document.getElementById('like-count').innerText = likes;
  localStorage.setItem('ss_likes', likes);
}

// Configuración inicial
window.onload = () => setLanguage('en');