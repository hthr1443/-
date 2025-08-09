// Admin settings script

document.addEventListener('DOMContentLoaded', () => {
  // Ensure user is logged in and has paid. Only allow access to authenticated users.
  const currentEmail = localStorage.getItem('currentUser');
  const users = JSON.parse(localStorage.getItem('cv_users') || '[]');
  const user = users.find(u => u.email === currentEmail);
  if (!user) {
    window.location.href = 'index.html';
    return;
  }
  if (!user.paid) {
    window.location.href = 'payment.html';
    return;
  }
  // Apply translations
  applyTranslations();
  // Language toggle
  const toggleBtn = document.getElementById('toggle-lang');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleLang);
  }
  // Set current year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
  // Populate form fields with existing settings or defaults
  const siteNameInput = document.getElementById('site-name');
  const landingTitleInput = document.getElementById('landing-title');
  const landingSubtitleInput = document.getElementById('landing-subtitle');
  const priceInput = document.getElementById('price');
  // Load overrides if present, otherwise use translation defaults
  siteNameInput.value = localStorage.getItem('cv_siteName') || translations.ar.site_name;
  landingTitleInput.value = localStorage.getItem('cv_landing_title') || translations.ar.landing_title;
  landingSubtitleInput.value = localStorage.getItem('cv_landing_subtitle') || translations.ar.landing_subtitle;
  priceInput.value = localStorage.getItem('cv_price') || '30';
});

// Save settings when the form is submitted
function saveSettings(event) {
  event.preventDefault();
  const siteName = document.getElementById('site-name').value.trim();
  const landingTitle = document.getElementById('landing-title').value.trim();
  const landingSubtitle = document.getElementById('landing-subtitle').value.trim();
  const priceVal = document.getElementById('price').value.trim();
  if (!siteName || !landingTitle || !landingSubtitle || !priceVal) {
    alert(currentLang === 'ar' ? 'يرجى تعبئة جميع الحقول.' : 'Please fill out all fields.');
    return;
  }
  // Save to localStorage
  localStorage.setItem('cv_siteName', siteName);
  localStorage.setItem('cv_landing_title', landingTitle);
  localStorage.setItem('cv_landing_subtitle', landingSubtitle);
  localStorage.setItem('cv_price', priceVal);
  // Immediately update translations and page content
  applyTranslations();
  // Update page elements (header and footer site name) by calling applyTranslations again in this page
  // Provide user feedback
  alert(currentLang === 'ar' ? 'تم حفظ التعديلات بنجاح.' : 'Changes saved successfully.');
}