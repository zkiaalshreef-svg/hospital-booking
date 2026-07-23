/* ==========================================================================
   contact.js — منطق نموذج التواصل: تحقق محلي ثم إرسال إلى php/contact.php
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const contactMsg = document.getElementById('contactMsg');
  if(!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let valid = true;

    form.querySelectorAll('.field').forEach(field => {
      const input = field.querySelector('input, textarea');
      if(!input.hasAttribute('required')) return;
      let ok = true;
      if(input.type === 'email') ok = Validators.email(input.value);
      else if(input.tagName === 'TEXTAREA') ok = Validators.minLen(input.value.trim(), 10);
      else ok = Validators.required(input.value);
      field.classList.toggle('invalid', !ok);
      if(!ok) valid = false;
    });

    if(!valid) return;

    const formData = new FormData(form);
    try{
      const res = await fetch('php/contact.php', { method:'POST', body: formData });
      const data = await res.json();
      showMessage(contactMsg, data.success ? 'success' : 'error', data.message);
      if(data.success) form.reset();
    }catch(err){
      showMessage(contactMsg, 'error', 'تعذر الاتصال بالخادم، تأكد من إعداد PHP وقاعدة البيانات (هذا الجزء يعمل بعد الاستضافة).');
    }
  });
});
