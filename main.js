/* ==========================================================================
   main.js — الوظائف العامة المشتركة بين صفحات نظام حجز مستشفى ميديكير
   ========================================================================== */

function applyTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('hospital_theme', theme);
}

document.addEventListener('DOMContentLoaded', ()=>{
  applyTheme(localStorage.getItem('hospital_theme') || 'medical');
  document.querySelectorAll('.theme-dot').forEach(dot=>{
    dot.addEventListener('click', ()=> applyTheme(dot.dataset.t));
  });

  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  if(burger && navLinks){
    burger.addEventListener('click', ()=> navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> navLinks.classList.remove('open')));
  }

  const scrollBtn = document.getElementById('scrollTop');
  if(scrollBtn){
    window.addEventListener('scroll', ()=> scrollBtn.classList.toggle('show', window.scrollY > 400));
    scrollBtn.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
  }

  document.querySelectorAll('.faq-item').forEach(item=>{
    const q = item.querySelector('.faq-q');
    if(!q) return;
    q.addEventListener('click', ()=>{
      const wasOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.faq-item').forEach(i=> i.classList.remove('open'));
      if(!wasOpen) item.classList.add('open');
    });
  });

  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a=>{
    if(a.getAttribute('href') === current) a.classList.add('active');
  });

  document.querySelectorAll('.current-year').forEach(el=> el.textContent = new Date().getFullYear());

  const revealEls = document.querySelectorAll('[data-reveal]');
  if('IntersectionObserver' in window && revealEls.length){
    const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold:.15 });
    revealEls.forEach(el=> observer.observe(el));
  }else{
    revealEls.forEach(el=> el.classList.add('in-view'));
  }

  refreshAuthUI();
});

function refreshAuthUI(){
  let session = null;
  try{ session = JSON.parse(localStorage.getItem('hospital_current_user')); }catch(e){}

  const loginLink = document.getElementById('navLoginLink');
  const userChip  = document.getElementById('navUserChip');
  const userNameEl = document.getElementById('navUserName');
  const logoutBtn  = document.getElementById('navLogoutBtn');
  if(!loginLink || !userChip) return;

  if(session && session.name){
    loginLink.style.display = 'none';
    userChip.style.display = 'flex';
    if(userNameEl) userNameEl.textContent = '👤 ' + session.name.split(' ')[0];
  }else{
    loginLink.style.display = '';
    userChip.style.display = 'none';
  }

  if(logoutBtn && !logoutBtn.dataset.bound){
    logoutBtn.dataset.bound = '1';
    logoutBtn.addEventListener('click', ()=>{
      localStorage.removeItem('hospital_current_user');
      window.location.href = 'index.html';
    });
  }
}

const Validators = {
  required(value){ return value !== null && value.trim().length > 0; },
  email(value){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); },
  phone(value){ return /^[0-9+\s-]{8,15}$/.test(value); },
  minLen(value, len){ return value.length >= len; },
};

function showMessage(el, type, text){
  el.textContent = text;
  el.className = 'form-msg show ' + type;
}
