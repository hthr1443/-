// Front-end script for CV builder website

// Translation strings for Arabic and English
const translations = {
  ar: {
    landing_title: 'سيرتي برو: منصتك لإنشاء السيرة الذاتية الاحترافية',
    landing_subtitle: 'أنشئ سيرتك الذاتية بسهولة وبأسلوب عصري يتوافق مع أحدث المعايير العالمية.',
    landing_cta: 'ابدأ الآن',
    feature_easy: 'سهولة الاستخدام',
    feature_easy_desc: 'واجهة بسيطة وسلسة تتيح لك إنشاء سيرتك الذاتية خلال دقائق.',
    feature_design: 'تصاميم احترافية',
    feature_design_desc: 'اختر من بين مجموعة متنوعة من القوالب المتناسقة مع معايير التوظيف.',
    feature_export: 'تصدير متعدد',
    feature_export_desc: 'حمّل سيرتك الذاتية بصيغة PDF أو شاركها مباشرة عبر الروابط.',
    auth_heading: 'تسجيل الدخول أو إنشاء حساب',
    login_title: 'تسجيل الدخول',
    register_title: 'إنشاء حساب',
    email: 'البريد الإلكتروني',
    password: 'كلمة المرور',
    full_name: 'الاسم الكامل',
    login_button: 'دخول',
    register_button: 'تسجيل',
    no_account: 'ليس لديك حساب؟',
    have_account: 'لديك حساب بالفعل؟',
    register_link: 'إنشاء حساب',
    login_link: 'تسجيل الدخول'
    ,
    // Payment translations
    payment_title: 'إتمام عملية الدفع',
    payment_desc: 'للاستفادة من سيرتي برو، يرجى إتمام عملية الدفع لمرة واحدة (30 ريال سعودي).',
    payment_methods: 'طرق الدفع المتاحة',
    pay_button: 'ادفع الآن',
    payment_success: 'تم الدفع بنجاح! سوف يتم تحويلك إلى صفحة إنشاء السير الذاتية.',

    // Builder translations
    builder_title: 'منشئ السير الذاتية',
    choose_template: 'اختر قالب سيرتك الذاتية',
    template_modern: 'قالب عصري',
    template_traditional: 'قالب تقليدي',
    submit_cv: 'إنشاء السيرة الذاتية',
    logout: 'تسجيل الخروج'
    ,
    // 20 template labels (Arabic)
    template1: 'قالب عصري 1',
    template2: 'قالب عصري 2',
    template3: 'قالب عصري 3',
    template4: 'قالب عصري 4',
    template5: 'قالب عصري 5',
    template6: 'قالب عصري 6',
    template7: 'قالب عصري 7',
    template8: 'قالب عصري 8',
    template9: 'قالب عصري 9',
    template10: 'قالب عصري 10',
    template11: 'قالب تقليدي 1',
    template12: 'قالب تقليدي 2',
    template13: 'قالب تقليدي 3',
    template14: 'قالب تقليدي 4',
    template15: 'قالب تقليدي 5',
    template16: 'قالب تقليدي 6',
    template17: 'قالب تقليدي 7',
    template18: 'قالب تقليدي 8',
    template19: 'قالب تقليدي 9',
    template20: 'قالب تقليدي 10'
    ,
    // Form fields and labels
    phone: 'رقم الهاتف',
    summary: 'الملخص',
    experience: 'الخبرات',
    education: 'التعليم',
    skills: 'المهارات'
    ,
    // PDF download button
    download_pdf: 'تحميل PDF',
    // Site name
    site_name: 'سيرتي برو',
    // Storage (file service) translations
    storage_title: 'خدمة التخزين',
    storage_desc: 'ارفع ملفاتك واحفظ بياناتك بأمان مع مساحة تخزينية تصل إلى 2000 جيجا بايت.',
    upload_files: 'رفع الملفات',
    storage_used: 'المستخدم',
    storage_remaining: 'المتبقي',
    upload_button: 'رفع الملف',
    file_name: 'اسم الملف',
    file_size: 'حجم الملف',
    file_date: 'تاريخ الرفع',
    delete_file: 'حذف',
    storage_nav: 'خدمة التخزين',
    // Admin (site settings) translations
    admin_title: 'إعدادات الموقع',
    admin_desc: 'قم بتعديل اسم الموقع والعنوان والوصف والسعر المعروض للمستخدمين.',
    admin_site_name_label: 'اسم الموقع',
    admin_landing_title_label: 'عنوان الصفحة الرئيسية',
    admin_landing_subtitle_label: 'وصف الصفحة الرئيسية',
    admin_price_label: 'السعر (بالريال السعودي)',
    admin_save_button: 'حفظ التعديلات'
  },
  en: {
    landing_title: 'Sirati Pro: Your Platform for Professional CVs',
    landing_subtitle: 'Create your CV easily with a modern style that meets the latest global standards.',
    landing_cta: 'Get Started',
    feature_easy: 'Ease of Use',
    feature_easy_desc: 'A simple and smooth interface that lets you create your CV within minutes.',
    feature_design: 'Professional Designs',
    feature_design_desc: 'Choose from a variety of templates aligned with recruitment standards.',
    feature_export: 'Multiple Export Options',
    feature_export_desc: 'Download your CV as a PDF or share it directly via links.',
    auth_heading: 'Sign in or Create an Account',
    login_title: 'Sign In',
    register_title: 'Create an Account',
    email: 'Email',
    password: 'Password',
    full_name: 'Full Name',
    login_button: 'Log In',
    register_button: 'Register',
    no_account: "Don't have an account?",
    have_account: 'Already have an account?',
    register_link: 'Create Account',
    login_link: 'Sign In'
    ,
    // Payment translations
    payment_title: 'Complete Payment',
    payment_desc: 'To access Sirati Pro, please complete a one‑time payment of 30 SAR.',
    payment_methods: 'Available Payment Methods',
    pay_button: 'Pay Now',
    payment_success: 'Payment completed successfully! You will be redirected to the CV builder page.',

    // Builder translations
    builder_title: 'CV Builder',
    choose_template: 'Choose Your CV Template',
    template_modern: 'Modern Template',
    template_traditional: 'Traditional Template',
    submit_cv: 'Generate CV',
    logout: 'Log Out'
    ,
    // 20 template labels (English)
    template1: 'Modern Template 1',
    template2: 'Modern Template 2',
    template3: 'Modern Template 3',
    template4: 'Modern Template 4',
    template5: 'Modern Template 5',
    template6: 'Modern Template 6',
    template7: 'Modern Template 7',
    template8: 'Modern Template 8',
    template9: 'Modern Template 9',
    template10: 'Modern Template 10',
    template11: 'Traditional Template 1',
    template12: 'Traditional Template 2',
    template13: 'Traditional Template 3',
    template14: 'Traditional Template 4',
    template15: 'Traditional Template 5',
    template16: 'Traditional Template 6',
    template17: 'Traditional Template 7',
    template18: 'Traditional Template 8',
    template19: 'Traditional Template 9',
    template20: 'Traditional Template 10'
    ,
    // Form fields and labels
    phone: 'Phone Number',
    summary: 'Summary',
    experience: 'Experience',
    education: 'Education',
    skills: 'Skills'
    ,
    // PDF download button
    download_pdf: 'Download PDF',
    // Site name
    site_name: 'Sirati Pro',
    // Storage (file service) translations
    storage_title: 'Storage Service',
    storage_desc: 'Upload your files and save your data securely with up to 2000 GB of storage.',
    upload_files: 'Upload Files',
    storage_used: 'Used',
    storage_remaining: 'Remaining',
    upload_button: 'Upload File',
    file_name: 'File Name',
    file_size: 'File Size',
    file_date: 'Upload Date',
    delete_file: 'Delete',
    storage_nav: 'Storage Service',
    // Admin (site settings) translations
    admin_title: 'Site Settings',
    admin_desc: 'Modify the site name, homepage title, subtitle and price displayed to users.',
    admin_site_name_label: 'Site Name',
    admin_landing_title_label: 'Homepage Title',
    admin_landing_subtitle_label: 'Homepage Subtitle',
    admin_price_label: 'Price (SAR)',
    admin_save_button: 'Save Changes'
  }
};

// Current language - default to Arabic but load from storage if exists
let currentLang = localStorage.getItem('cv_lang') || 'ar';

// Load translations into the page
function applyTranslations() {
  // Check for overrides stored in localStorage and update translation strings accordingly.
  // Site name override applies to both languages.
  const overrideSiteName = localStorage.getItem('cv_siteName');
  if (overrideSiteName) {
    translations.ar.site_name = overrideSiteName;
    translations.en.site_name = overrideSiteName;
  }
  // Landing page title override
  const overrideLandingTitle = localStorage.getItem('cv_landing_title');
  if (overrideLandingTitle) {
    translations.ar.landing_title = overrideLandingTitle;
    translations.en.landing_title = overrideLandingTitle;
  }
  // Landing page subtitle override
  const overrideLandingSubtitle = localStorage.getItem('cv_landing_subtitle');
  if (overrideLandingSubtitle) {
    translations.ar.landing_subtitle = overrideLandingSubtitle;
    translations.en.landing_subtitle = overrideLandingSubtitle;
  }
  // Price override. If a custom price is stored, update the payment description accordingly.
  const overridePrice = localStorage.getItem('cv_price');
  if (overridePrice) {
    // Use the current site name (which may have been overridden) in the description
    const siteNameAr = translations.ar.site_name;
    const siteNameEn = translations.en.site_name;
    translations.ar.payment_desc = `للاستفادة من ${siteNameAr}، يرجى إتمام عملية الدفع لمرة واحدة (${overridePrice} ريال سعودي).`;
    translations.en.payment_desc = `To access ${siteNameEn}, please complete a one‑time payment of ${overridePrice} SAR.`;
  }
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = translations[currentLang][key];
    if (translation) {
      el.textContent = translation;
    }
  });

  // Adjust direction and HTML lang attribute
  document.documentElement.lang = currentLang;
  document.body.style.direction = currentLang === 'ar' ? 'rtl' : 'ltr';

  // Update toggle button text
  const toggleBtn = document.getElementById('toggle-lang');
  toggleBtn.textContent = currentLang === 'ar' ? 'English' : 'العربية';
}

// Toggle language between Arabic and English
function toggleLang() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  // Save preference
  localStorage.setItem('cv_lang', currentLang);
  applyTranslations();
}

// Logout user globally. Clears the current user and redirects to the home page.
function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}

// Scroll to section
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Show login form
function showLoginForm() {
  const login = document.getElementById('login-form');
  const register = document.getElementById('register-form');
  // Show login and hide register
  if (login) login.style.display = 'block';
  if (register) register.style.display = 'none';
  // Enable login inputs and disable register inputs to prevent hidden required fields from triggering validation
  if (login) {
    login.querySelectorAll('input').forEach(el => {
      el.disabled = false;
    });
  }
  if (register) {
    register.querySelectorAll('input').forEach(el => {
      el.disabled = true;
    });
  }
}

// Show register form
function showRegisterForm() {
  const login = document.getElementById('login-form');
  const register = document.getElementById('register-form');
  // Show register and hide login
  if (register) register.style.display = 'block';
  if (login) login.style.display = 'none';
  // Enable register inputs and disable login inputs to prevent hidden required fields from triggering validation
  if (login) {
    login.querySelectorAll('input').forEach(el => {
      el.disabled = true;
    });
  }
  if (register) {
    register.querySelectorAll('input').forEach(el => {
      el.disabled = false;
    });
  }
}

// Register user
function register(event) {
  event.preventDefault();
  const name = document.getElementById('register-name').value.trim();
  const email = document.getElementById('register-email').value.trim();
  const password = document.getElementById('register-password').value;

  if (!name || !email || !password) {
    alert(currentLang === 'ar' ? 'يرجى تعبئة جميع الحقول.' : 'Please fill out all fields.');
    return;
  }

  const users = JSON.parse(localStorage.getItem('cv_users') || '[]');
  if (users.some(u => u.email === email)) {
    alert(currentLang === 'ar' ? 'البريد الإلكتروني مستخدم مسبقًا.' : 'Email is already registered.');
    return;
  }

  users.push({ name, email, password, paid: false });
  localStorage.setItem('cv_users', JSON.stringify(users));
  localStorage.setItem('currentUser', email);
  // redirect to payment page
  window.location.href = 'payment.html';
}

// Login user
function login(event) {
  event.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;

  const users = JSON.parse(localStorage.getItem('cv_users') || '[]');
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    alert(currentLang === 'ar' ? 'بيانات الدخول غير صحيحة.' : 'Invalid credentials.');
    return;
  }
  localStorage.setItem('currentUser', email);
  // If user has not paid, redirect to payment page
  if (!user.paid) {
    window.location.href = 'payment.html';
  } else {
    window.location.href = 'builder.html';
  }
}

// On page load, set up event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Display login or register form by default
  showLoginForm();

  // Language toggle button
  const toggleBtn = document.getElementById('toggle-lang');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleLang);
  }

  // Set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Apply initial translations
  applyTranslations();
});