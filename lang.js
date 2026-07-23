/* ==========================================================================
   lang.js — تبديل اللغة (عربي/إنجليزي) لكل صفحات نظام حجز مستشفى ميديكير
   ========================================================================== */

const I18N = {
  ar: {
    topbar_emergency:"🚑 حالات الطوارئ: 997",
    topbar_hours:"🕒 استقبال المرضى على مدار الساعة",
    topbar_track:"📞 966112345678+",

    nav_home:"الرئيسية", nav_appointment:"حجز موعد", nav_contact:"تواصل معنا",
    nav_login:"تسجيل الدخول", btn_logout:"خروج",

    hero_eyebrow:"مستشفى ميديكير التخصصي",
    hero_title:"رعاية صحية متكاملة تهتم بك أولًا",
    hero_desc:"احجز موعدك مع أفضل الاستشاريين في مختلف التخصصات خلال دقائق، مع متابعة كاملة لحالتك من أول استشارة وحتى الشفاء التام.",
    hero_btn_book:"احجز موعدك الآن", hero_btn_depts:"تصفح الأقسام",
    hero_badge_title:"+35,000 مريض", hero_badge_sub:"تمت رعايتهم بنجاح",

    trust1:"أطباء استشاريون معتمدون", trust2:"أجهزة طبية حديثة", trust3:"حجز إلكتروني سريع", trust4:"دعم على مدار الساعة",

    dept_eyebrow:"أقسامنا الطبية", dept_title:"تخصصات طبية شاملة تحت سقف واحد",
    dept_desc:"فريق طبي متكامل من الاستشاريين في مختلف التخصصات لخدمة جميع أفراد الأسرة.",
    dept1_t:"طب القلب", dept1_d:"تشخيص وعلاج أمراض القلب والشرايين بأحدث الأجهزة.", dept1_c:"6 استشاريين",
    dept2_t:"طب الأطفال", dept2_d:"رعاية صحية شاملة للأطفال من الولادة وحتى سن المراهقة.", dept2_c:"8 استشاريين",
    dept3_t:"العظام والمفاصل", dept3_d:"علاج إصابات وأمراض العظام والمفاصل والعمود الفقري.", dept3_c:"5 استشاريين",
    dept4_t:"الجلدية والتجميل", dept4_d:"تشخيص وعلاج أمراض الجلد وخدمات التجميل الطبي.", dept4_c:"4 استشاريين",
    dept5_t:"طب الأسنان", dept5_d:"رعاية شاملة لصحة الفم والأسنان لكل الأعمار.", dept5_c:"7 استشاريين",
    dept6_t:"المخ والأعصاب", dept6_d:"تشخيص وعلاج اضطرابات الجهاز العصبي والدماغ.", dept6_c:"4 استشاريين",

    doctors_eyebrow:"نخبة أطبائنا", doctors_title:"استشاريون بخبرات عالمية",
    doc1_name:"د. سلمى الأحمدي", doc1_spec:"استشارية أمراض القلب",
    doc2_name:"د. خالد المطيري", doc2_spec:"استشاري جراحة العظام",
    doc3_name:"د. هدى النعيمي", doc3_spec:"استشارية طب الأطفال",
    doc4_name:"د. عمر الشهري", doc4_spec:"استشاري المخ والأعصاب",
    doc_exp:"سنة خبرة", doc_rating:"تقييم", doc_book_btn:"احجز موعدًا",

    feat_eyebrow:"لماذا تختارنا", feat_title:"تجربة رعاية صحية متكاملة",
    feat1_t:"حجز إلكتروني فوري", feat1_d:"احجز موعدك أونلاين واختر الطبيب والوقت المناسب لك خلال دقائق.",
    feat2_t:"سجل طبي إلكتروني", feat2_d:"تابعي سجلك الطبي وتاريخ زياراتك بسهولة من خلال حسابك.",
    feat3_t:"تذكير تلقائي بالموعد", feat3_d:"إشعارات تذكيرية بموعدك حتى لا تفوتك أي زيارة مهمة.",
    feat4_t:"فريق تمريض متخصص", feat4_d:"طاقم تمريض مؤهل لرعايتك على مدار ساعات العمل كافة.",
    feat5_t:"صيدلية داخلية", feat5_d:"صيدلية متكاملة داخل المستشفى لصرف الأدوية فور الاستشارة.",
    feat6_t:"قبول التأمين الصحي", feat6_d:"نتعامل مع معظم شركات التأمين الصحي المحلية لراحتكم.",

    hours_title:"مواعيد العمل والاستقبال",
    th_day:"اليوم", th_hours:"أوقات الدوام", th_emergency:"الطوارئ",
    day_sat_wed:"السبت - الأربعاء", day_thu:"الخميس", day_fri:"الجمعة",
    hours_main:"8:00 صباحًا - 10:00 مساءً", hours_thu:"9:00 صباحًا - 6:00 مساءً", hours_fri:"4:00 عصرًا - 10:00 مساءً",
    emergency_always:"على مدار الساعة",

    test_eyebrow:"آراء مرضانا", test_title:"ثقتكم أمانة نحملها",
    test1:"تعامل راقٍ من الاستقبال وحتى الطبيب، والحجز الإلكتروني وفّر عليّ وقت الانتظار الطويل.",
    test2:"الدكتور شرح حالتي بالتفصيل واطمأننت، والمتابعة بعد العملية كانت ممتازة جدًا.",
    test3:"نظام التذكير بالمواعيد رائع، ما نسيت موعد ولا مرة من وقت ما صرت أستخدم الحجز الإلكتروني.",
    test1_name:"أمل السبيعي", test2_name:"ماجد القحطاني", test3_name:"هند العتيبي",

    faq_eyebrow:"الأسئلة الشائعة", faq_title:"كل ما تحتاج معرفته عن الحجز",
    faq1_q:"كيف أحجز موعدًا؟", faq1_a:"يمكنك حجز موعدك مباشرة من صفحة «حجز موعد» باختيار القسم والطبيب والتاريخ المناسب، وسيصلك تأكيد خلال ساعات.",
    faq2_q:"هل يمكن إلغاء أو تعديل الموعد؟", faq2_a:"نعم، يمكن إلغاء أو تعديل الموعد مجانًا حتى 24 ساعة قبل الموعد المحدد عبر التواصل معنا.",
    faq3_q:"هل تقبلون التأمين الصحي؟", faq3_a:"نتعامل مع معظم شركات التأمين الصحي الكبرى، يُرجى إحضار بطاقة التأمين عند الحضور للتحقق من التغطية.",
    faq4_q:"ماذا لو تأخرت عن الموعد؟", faq4_a:"يُرجى الحضور قبل 15 دقيقة من الموعد؛ التأخر أكثر من 20 دقيقة قد يستدعي إعادة جدولة الموعد حسب الزحام.",
    faq5_q:"هل يوجد قسم طوارئ على مدار الساعة؟", faq5_a:"نعم، قسم الطوارئ يعمل على مدار الساعة طوال أيام الأسبوع لاستقبال الحالات العاجلة دون الحاجة لحجز مسبق.",

    footer_about_t:"عن المستشفى",
    footer_about_d:"مستشفى ميديكير التخصصي يقدم رعاية صحية متكاملة بأعلى معايير الجودة العالمية، بفريق طبي متخصص وأحدث الأجهزة الطبية منذ عام 2010.",
    footer_links_t:"روابط سريعة", footer_depts_t:"أقسامنا",
    footer_contact_t:"تواصل معنا",
    footer_rights:"جميع الحقوق محفوظة", footer_made:"تصميم وتطوير فريق التقنية",
    footer_privacy:"سياسة الخصوصية", footer_terms:"الشروط والأحكام",

    /* تسجيل الدخول */
    login_hero_title:"مرحبًا بعودتك",
    login_hero_desc:"سجّل الدخول لمتابعة مواعيدك وسجلك الطبي، أو أنشئ حسابًا جديدًا كمريض.",
    tab_login:"تسجيل الدخول", tab_register:"حساب جديد",
    label_email:"البريد الإلكتروني", label_password:"كلمة المرور",
    label_name:"الاسم الكامل", label_phone:"رقم الجوال", label_confirm:"تأكيد كلمة المرور",
    label_national_id:"رقم الهوية / الإقامة",
    remember_me:"تذكرني", forgot_pass:"نسيت كلمة المرور؟",
    btn_login:"تسجيل الدخول", btn_register:"إنشاء الحساب", or_divider:"أو",
    have_account:"لديك حساب بالفعل؟", no_account:"ليس لديك حساب؟",
    err_required:"هذا الحقل مطلوب", err_email:"يرجى إدخال بريد إلكتروني صحيح",
    err_phone:"يرجى إدخال رقم جوال صحيح", err_pass_len:"كلمة المرور يجب أن تكون 8 أحرف على الأقل",
    err_pass_match:"كلمتا المرور غير متطابقتين",

    /* التواصل */
    contact_hero_title:"نحن هنا لمساعدتك", contact_hero_desc:"لأي استفسار طبي أو إداري، تواصل معنا وسيرد فريقنا خلال 24 ساعة.",
    contact_info_t:"معلومات التواصل", contact_info_d:"يسعدنا استقبال استفساراتكم عبر أي من الوسائل التالية، أو زيارتنا مباشرة.",
    ci_addr_t:"العنوان", ci_addr_d:"طريق الملك عبدالله، حي النزهة، الرياض",
    ci_phone_t:"الهاتف", ci_phone_d:"966112345678+",
    ci_email_t:"البريد الإلكتروني", ci_email_d:"info@medicare-hospital.example.com",
    ci_hours_t:"استقبال الطوارئ", ci_hours_d:"على مدار الساعة، طوال أيام الأسبوع",
    contact_form_t:"أرسل لنا رسالة",
    label_subject:"الموضوع", label_message:"الرسالة", contact_form_send:"إرسال الرسالة",

    /* صفحة الحجز */
    appt_hero_t:"احجز موعدك في دقائق", appt_hero_d:"عبّئ البيانات التالية وسيتم تأكيد موعدك عبر البريد الإلكتروني أو الجوال خلال ساعات.",
    step1_t:"القسم والطبيب", step2_t:"بيانات المريض", step3_t:"المراجعة والتأكيد",
    label_dept:"اختر القسم الطبي", label_doctor:"اختر الطبيب",
    label_date:"تاريخ الموعد", label_time_slot:"الفترة المفضلة",
    time_morning:"صباحية (8ص - 12م)", time_afternoon:"ظهيرة (12م - 4ع)", time_evening:"مسائية (4ع - 10م)",
    label_visit_type:"نوع الزيارة", visit_new:"زيارة جديدة", visit_followup:"متابعة",
    label_gender:"الجنس", gender_male:"ذكر", gender_female:"أنثى",
    label_age:"العمر", label_symptoms:"وصف الأعراض أو سبب الزيارة",
    appt_summary_t:"ملخص الحجز",
    sum_dept:"القسم", sum_doctor:"الطبيب", sum_date:"التاريخ", sum_time:"الفترة", sum_patient:"اسم المريض",
    btn_next:"التالي", btn_prev:"السابق", btn_confirm:"تأكيد الحجز",
    appt_success_t:"تم استلام طلب الحجز بنجاح!",
    appt_success_d:"سيتواصل معك فريق الاستقبال لتأكيد الموعد النهائي خلال ساعات العمل.",
    agree_terms:"أوافق على سياسة الحجز والإلغاء الخاصة بالمستشفى",

    page_home_crumb:"الرئيسية",
  },
  en: {
    topbar_emergency:"🚑 Emergency: 997",
    topbar_hours:"🕒 Patient reception 24/7",
    topbar_track:"📞 +966112345678",

    nav_home:"Home", nav_appointment:"Book Appointment", nav_contact:"Contact Us",
    nav_login:"Login", btn_logout:"Logout",

    hero_eyebrow:"MediCare Specialist Hospital",
    hero_title:"Comprehensive healthcare that puts you first",
    hero_desc:"Book your appointment with top consultants across specialties in minutes, with complete follow-up care from your first consultation to full recovery.",
    hero_btn_book:"Book Your Appointment", hero_btn_depts:"Browse Departments",
    hero_badge_title:"35,000+ Patients", hero_badge_sub:"Successfully cared for",

    trust1:"Certified consultant physicians", trust2:"Modern medical equipment", trust3:"Fast online booking", trust4:"24/7 support",

    dept_eyebrow:"Our Departments", dept_title:"Comprehensive medical specialties under one roof",
    dept_desc:"A fully-integrated medical team of consultants across specialties to serve every family member.",
    dept1_t:"Cardiology", dept1_d:"Diagnosis and treatment of heart and artery diseases with the latest equipment.", dept1_c:"6 Consultants",
    dept2_t:"Pediatrics", dept2_d:"Comprehensive healthcare for children from birth through adolescence.", dept2_c:"8 Consultants",
    dept3_t:"Orthopedics", dept3_d:"Treatment of bone, joint, and spine injuries and conditions.", dept3_c:"5 Consultants",
    dept4_t:"Dermatology & Aesthetics", dept4_d:"Diagnosis and treatment of skin conditions and medical aesthetic services.", dept4_c:"4 Consultants",
    dept5_t:"Dentistry", dept5_d:"Comprehensive oral and dental care for all ages.", dept5_c:"7 Consultants",
    dept6_t:"Neurology", dept6_d:"Diagnosis and treatment of nervous system and brain disorders.", dept6_c:"4 Consultants",

    doctors_eyebrow:"Our Top Doctors", doctors_title:"Consultants with global expertise",
    doc1_name:"Dr. Salma Al-Ahmadi", doc1_spec:"Cardiology Consultant",
    doc2_name:"Dr. Khalid Al-Mutairi", doc2_spec:"Orthopedic Surgery Consultant",
    doc3_name:"Dr. Huda Al-Nuaimi", doc3_spec:"Pediatrics Consultant",
    doc4_name:"Dr. Omar Al-Shehri", doc4_spec:"Neurology Consultant",
    doc_exp:"years experience", doc_rating:"rating", doc_book_btn:"Book Appointment",

    feat_eyebrow:"Why Choose Us", feat_title:"A complete healthcare experience",
    feat1_t:"Instant Online Booking", feat1_d:"Book your appointment online and choose the doctor and time that suits you in minutes.",
    feat2_t:"Digital Medical Record", feat2_d:"Track your medical history and past visits easily through your account.",
    feat3_t:"Automatic Appointment Reminders", feat3_d:"Reminder notifications for your appointment so you never miss an important visit.",
    feat4_t:"Specialized Nursing Team", feat4_d:"Qualified nursing staff to care for you throughout all working hours.",
    feat5_t:"In-House Pharmacy", feat5_d:"A fully-stocked pharmacy inside the hospital to dispense medication right after consultation.",
    feat6_t:"Health Insurance Accepted", feat6_d:"We work with most local health insurance providers for your convenience.",

    hours_title:"Working & Reception Hours",
    th_day:"Day", th_hours:"Working Hours", th_emergency:"Emergency",
    day_sat_wed:"Saturday - Wednesday", day_thu:"Thursday", day_fri:"Friday",
    hours_main:"8:00 AM - 10:00 PM", hours_thu:"9:00 AM - 6:00 PM", hours_fri:"4:00 PM - 10:00 PM",
    emergency_always:"24/7",

    test_eyebrow:"Patient Reviews", test_title:"Your trust is an honor we carry",
    test1:"Excellent treatment from reception to the doctor, and online booking saved me a long wait.",
    test2:"The doctor explained my condition in detail and reassured me, and the post-op follow-up was excellent.",
    test3:"The appointment reminder system is great — I haven't missed a single appointment since I started using online booking.",
    test1_name:"Amal Al-Subaie", test2_name:"Majed Al-Qahtani", test3_name:"Hind Al-Otaibi",

    faq_eyebrow:"FAQ", faq_title:"Everything you need to know about booking",
    faq1_q:"How do I book an appointment?", faq1_a:"You can book directly from the 'Book Appointment' page by choosing the department, doctor, and preferred date, and you'll receive confirmation within hours.",
    faq2_q:"Can I cancel or reschedule my appointment?", faq2_a:"Yes, appointments can be cancelled or rescheduled for free up to 24 hours before the scheduled time by contacting us.",
    faq3_q:"Do you accept health insurance?", faq3_a:"We work with most major health insurance providers; please bring your insurance card upon arrival to verify coverage.",
    faq4_q:"What if I'm late for my appointment?", faq4_a:"Please arrive 15 minutes early; being more than 20 minutes late may require rescheduling depending on clinic load.",
    faq5_q:"Is there a 24/7 emergency department?", faq5_a:"Yes, our emergency department operates 24/7 every day of the week to receive urgent cases without prior booking.",

    footer_about_t:"About the Hospital",
    footer_about_d:"MediCare Specialist Hospital provides comprehensive healthcare with the highest international quality standards, a specialized medical team, and the latest medical equipment since 2010.",
    footer_links_t:"Quick Links", footer_depts_t:"Our Departments",
    footer_contact_t:"Contact Us",
    footer_rights:"All Rights Reserved", footer_made:"Designed & developed by the tech team",
    footer_privacy:"Privacy Policy", footer_terms:"Terms & Conditions",

    login_hero_title:"Welcome Back",
    login_hero_desc:"Sign in to track your appointments and medical record, or create a new patient account.",
    tab_login:"Login", tab_register:"New Account",
    label_email:"Email Address", label_password:"Password",
    label_name:"Full Name", label_phone:"Phone Number", label_confirm:"Confirm Password",
    label_national_id:"National ID / Iqama Number",
    remember_me:"Remember me", forgot_pass:"Forgot password?",
    btn_login:"Login", btn_register:"Create Account", or_divider:"or",
    have_account:"Already have an account?", no_account:"Don't have an account?",
    err_required:"This field is required", err_email:"Please enter a valid email address",
    err_phone:"Please enter a valid phone number", err_pass_len:"Password must be at least 8 characters",
    err_pass_match:"Passwords do not match",

    contact_hero_title:"We're Here to Help", contact_hero_desc:"For any medical or administrative inquiry, reach out and our team will respond within 24 hours.",
    contact_info_t:"Contact Information", contact_info_d:"We're happy to receive your inquiries through any of the following, or visit us directly.",
    ci_addr_t:"Address", ci_addr_d:"King Abdullah Road, Al Nuzha District, Riyadh",
    ci_phone_t:"Phone", ci_phone_d:"+966112345678",
    ci_email_t:"Email", ci_email_d:"info@medicare-hospital.example.com",
    ci_hours_t:"Emergency Reception", ci_hours_d:"24/7, every day of the week",
    contact_form_t:"Send Us a Message",
    label_subject:"Subject", label_message:"Message", contact_form_send:"Send Message",

    appt_hero_t:"Book Your Appointment in Minutes", appt_hero_d:"Fill in the details below and your appointment will be confirmed via email or phone within hours.",
    step1_t:"Department & Doctor", step2_t:"Patient Details", step3_t:"Review & Confirm",
    label_dept:"Choose Medical Department", label_doctor:"Choose Doctor",
    label_date:"Appointment Date", label_time_slot:"Preferred Time Slot",
    time_morning:"Morning (8AM - 12PM)", time_afternoon:"Afternoon (12PM - 4PM)", time_evening:"Evening (4PM - 10PM)",
    label_visit_type:"Visit Type", visit_new:"New Visit", visit_followup:"Follow-up",
    label_gender:"Gender", gender_male:"Male", gender_female:"Female",
    label_age:"Age", label_symptoms:"Describe symptoms or reason for visit",
    appt_summary_t:"Booking Summary",
    sum_dept:"Department", sum_doctor:"Doctor", sum_date:"Date", sum_time:"Time Slot", sum_patient:"Patient Name",
    btn_next:"Next", btn_prev:"Previous", btn_confirm:"Confirm Booking",
    appt_success_t:"Appointment Request Received!",
    appt_success_d:"Our reception team will contact you to confirm the final appointment during working hours.",
    agree_terms:"I agree to the hospital's booking and cancellation policy",

    page_home_crumb:"Home",
  }
};

function getCurrentLang(){ return localStorage.getItem('hospital_lang') || 'ar'; }

function applyLanguage(lang){
  const dict = I18N[lang] || I18N.ar;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key = el.getAttribute('data-i18n-placeholder');
    if(dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });

  localStorage.setItem('hospital_lang', lang);
  const langBtnLabel = document.getElementById('langBtnLabel');
  if(langBtnLabel) langBtnLabel.textContent = lang === 'ar' ? 'EN' : 'AR';
}

function toggleLanguage(){ applyLanguage(getCurrentLang() === 'ar' ? 'en' : 'ar'); }

document.addEventListener('DOMContentLoaded', ()=>{
  applyLanguage(getCurrentLang());
  const langBtn = document.getElementById('langBtn');
  if(langBtn) langBtn.addEventListener('click', toggleLanguage);
});
