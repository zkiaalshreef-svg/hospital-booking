/* ==========================================================================
   appointment.js — منطق صفحة حجز الموعد متعددة الخطوات
   ========================================================================== */

/* بيانات الأطباء لكل قسم (تُستخدم لتعبئة قائمة الطبيب تلقائيًا حسب القسم المختار) */
const DOCTORS_BY_DEPT = {
  cardiology:   ["د. سلمى الأحمدي — استشارية أمراض القلب", "د. طارق يوسف — استشاري قسطرة قلبية"],
  pediatrics:   ["د. هدى النعيمي — استشارية طب الأطفال", "د. ريان فهد — أخصائي طب أطفال"],
  orthopedics:  ["د. خالد المطيري — استشاري جراحة العظام", "د. سارة الدوسري — أخصائية عظام"],
  dermatology:  ["د. نوف الحربي — استشارية الجلدية والتجميل"],
  dental:       ["د. فيصل العمري — استشاري طب الأسنان", "د. ليان القحطاني — أخصائية تقويم أسنان"],
  neurology:    ["د. عمر الشهري — استشاري المخ والأعصاب"],
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('appointmentForm');
  if(!form) return;

  const steps = document.querySelectorAll('.step');
  const panels = document.querySelectorAll('.form-step');
  const apptMsg = document.getElementById('apptMsg');
  let currentStep = 1;

  const deptSelect = form.querySelector('[name="department"]');
  const doctorSelect = form.querySelector('[name="doctor"]');

  function populateDoctors(){
    const list = DOCTORS_BY_DEPT[deptSelect.value] || [];
    doctorSelect.innerHTML = '';
    list.forEach(name => {
      const opt = document.createElement('option');
      opt.value = name;
      opt.textContent = name;
      doctorSelect.appendChild(opt);
    });
  }
  deptSelect.addEventListener('change', populateDoctors);
  populateDoctors();

  function goToStep(n){
    currentStep = n;
    steps.forEach(s => s.classList.toggle('active', parseInt(s.dataset.step) <= n));
    panels.forEach(p => p.style.display = parseInt(p.dataset.stepPanel) === n ? 'block' : 'none');
    if(n === 3) fillSummary();
    window.scrollTo({top: document.querySelector('.steps').offsetTop - 120, behavior:'smooth'});
  }

  function validateStep(panel){
    let valid = true;
    panel.querySelectorAll('.field').forEach(field => {
      const input = field.querySelector('input, select, textarea');
      if(!input || !input.hasAttribute('required')) return;
      let ok = true;
      if(input.type === 'email') ok = Validators.email(input.value);
      else if(input.name === 'phone') ok = Validators.phone(input.value);
      else ok = Validators.required(input.value);
      if(!ok) valid = false;
      field.classList.toggle('invalid', !ok);
    });
    return valid;
  }

  document.querySelectorAll('.next-step').forEach(btn => {
    btn.addEventListener('click', () => {
      const activePanel = document.querySelector(`.form-step[data-step-panel="${currentStep}"]`);
      if(validateStep(activePanel)) goToStep(currentStep + 1);
    });
  });
  document.querySelectorAll('.prev-step').forEach(btn => {
    btn.addEventListener('click', () => goToStep(currentStep - 1));
  });

  function fillSummary(){
    const deptText = deptSelect.options[deptSelect.selectedIndex]?.textContent || '—';
    document.getElementById('sumDept').textContent = deptText;
    document.getElementById('sumDoctor').textContent = doctorSelect.value || '—';
    document.getElementById('sumDate').textContent = form.querySelector('[name="appointment_date"]').value || '—';
    const timeSelect = form.querySelector('[name="time_slot"]');
    document.getElementById('sumTime').textContent = timeSelect.options[timeSelect.selectedIndex]?.textContent || '—';
    document.getElementById('sumPatient').textContent = form.querySelector('[name="patient_name"]').value || '—';
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const agree = form.querySelector('[name="agree"]');
    if(!agree.checked){
      showMessage(apptMsg, 'error', 'يرجى الموافقة على سياسة الحجز والإلغاء أولاً.');
      return;
    }

    const formData = new FormData(form);
    try{
      const res = await fetch('php/appointment.php', { method:'POST', body: formData });
      const data = await res.json();
      showMessage(apptMsg, data.success ? 'success' : 'error', data.message);
      if(data.success){
        form.reset();
        populateDoctors();
        setTimeout(()=> goToStep(1), 1500);
      }
    }catch(err){
      showMessage(apptMsg, 'error', 'تعذر الاتصال بالخادم، تأكد من إعداد PHP وقاعدة البيانات (هذا الجزء يعمل بعد الاستضافة).');
    }
  });

  // الحد الأدنى لتاريخ الحجز هو الغد
  const dateInput = form.querySelector('[name="appointment_date"]');
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  dateInput.min = tomorrow.toISOString().split('T')[0];
});
