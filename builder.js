// Builder page script

// Template configuration for multiple CV templates.
// Each entry defines the layout type (modern or traditional) and an accent colour.
// Modern layouts use a two‑panel design, while traditional layouts use a single column.
// Users can extend this object to include additional templates by providing a
// unique key (matching the <option> value in builder.html) and specifying
// the layout and accent colour in HEX format.
const templateConfigs = {
  // Ten modern templates
  'template1': { layout: 'modern', accent: '#4a90e2' },
  'template2': { layout: 'modern', accent: '#e74c3c' },
  'template3': { layout: 'modern', accent: '#1abc9c' },
  'template4': { layout: 'modern', accent: '#9b59b6' },
  'template5': { layout: 'modern', accent: '#f39c12' },
  'template6': { layout: 'modern', accent: '#d35400' },
  'template7': { layout: 'modern', accent: '#2ecc71' },
  'template8': { layout: 'modern', accent: '#34495e' },
  'template9': { layout: 'modern', accent: '#16a085' },
  'template10': { layout: 'modern', accent: '#c0392b' },
  // Ten traditional templates
  'template11': { layout: 'traditional', accent: '#4a90e2' },
  'template12': { layout: 'traditional', accent: '#e74c3c' },
  'template13': { layout: 'traditional', accent: '#1abc9c' },
  'template14': { layout: 'traditional', accent: '#9b59b6' },
  'template15': { layout: 'traditional', accent: '#f39c12' },
  'template16': { layout: 'traditional', accent: '#d35400' },
  'template17': { layout: 'traditional', accent: '#2ecc71' },
  'template18': { layout: 'traditional', accent: '#34495e' },
  'template19': { layout: 'traditional', accent: '#16a085' },
  'template20': { layout: 'traditional', accent: '#c0392b' }
};

document.addEventListener('DOMContentLoaded', () => {
  // Check if user logged in and paid
  const currentEmail = localStorage.getItem('currentUser');
  const users = JSON.parse(localStorage.getItem('cv_users') || '[]');
  const user = users.find(u => u.email === currentEmail);
  if (!user) {
    // Not logged in
    window.location.href = 'index.html';
    return;
  }
  if (!user.paid) {
    // Not paid, redirect to payment
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

  // Pre‑fill the name and email fields based on the logged in user
  // This makes it easier for users to start building their CV without
  // re‑entering information they've already provided during registration.
  const nameInput = document.getElementById('cv-name');
  const emailInput = document.getElementById('cv-email');
  if (user && nameInput) {
    nameInput.value = user.name;
  }
  if (user && emailInput) {
    emailInput.value = user.email;
  }
});


// Generate CV preview
function generateCV(event) {
  event.preventDefault();
  // Collect form values
  const name = document.getElementById('cv-name').value.trim();
  const email = document.getElementById('cv-email').value.trim();
  const phone = document.getElementById('cv-phone').value.trim();
  const summary = document.getElementById('cv-summary').value.trim();
  const experience = document.getElementById('cv-experience').value.trim();
  const education = document.getElementById('cv-education').value.trim();
  const skills = document.getElementById('cv-skills').value.trim();
  const template = document.getElementById('cv-template').value;

  // Clear previous preview
  const previewContainer = document.getElementById('cv-preview');
  previewContainer.innerHTML = '';

  // Determine which template configuration to use. If the selected
  // template exists in templateConfigs, use its settings. Otherwise,
  // fall back to the modern layout with a default accent colour.
  let config = templateConfigs[template];
  if (!config) {
    config = { layout: 'modern', accent: '#4a90e2' };
  }
  const accent = config.accent || '#4a90e2';
  const layoutType = config.layout || 'modern';

  // Helper function to set accent colour on section titles
  function styleSectionTitles(container) {
    const titles = container.querySelectorAll('.section-title, h3');
    titles.forEach(t => {
      t.style.color = accent;
    });
    // Style name element
    const nameEl = container.querySelector('.name');
    if (nameEl) {
      nameEl.style.color = accent;
    }
  }

  // Build CV based on selected layout
  if (layoutType === 'modern') {
    const cv = document.createElement('div');
    cv.className = 'cv-modern';
    // Left panel
    const left = document.createElement('div');
    left.className = 'left-panel';
    // Set a lighter version of the accent colour for the panel background
    left.style.backgroundColor = accent + '20';
    // Contact info
    const contactTitle = document.createElement('div');
    contactTitle.className = 'section-title';
    contactTitle.textContent = currentLang === 'ar' ? 'معلومات التواصل' : 'Contact Information';
    left.appendChild(contactTitle);
    const contactInfo = document.createElement('p');
    contactInfo.innerHTML = `${email}<br>${phone}`;
    left.appendChild(contactInfo);
    // Skills
    const skillsTitle = document.createElement('div');
    skillsTitle.className = 'section-title';
    skillsTitle.textContent = currentLang === 'ar' ? 'المهارات' : 'Skills';
    left.appendChild(skillsTitle);
    const skillsList = document.createElement('p');
    skillsList.innerHTML = skills.replace(/\n/g, '<br>');
    left.appendChild(skillsList);
    cv.appendChild(left);
    // Right panel
    const right = document.createElement('div');
    right.className = 'right-panel';
    const nameEl = document.createElement('div');
    nameEl.className = 'name';
    nameEl.textContent = name;
    right.appendChild(nameEl);
    const titleEl = document.createElement('div');
    titleEl.className = 'title';
    titleEl.textContent = summary.split('\n')[0] || '';
    right.appendChild(titleEl);
    // Summary section
    const summarySection = document.createElement('div');
    summarySection.className = 'section';
    const summaryTitle = document.createElement('h3');
    summaryTitle.textContent = currentLang === 'ar' ? 'الملخص' : 'Summary';
    summarySection.appendChild(summaryTitle);
    const summaryContent = document.createElement('p');
    summaryContent.innerHTML = summary.replace(/\n/g, '<br>');
    summarySection.appendChild(summaryContent);
    right.appendChild(summarySection);
    // Experience section
    const expSection = document.createElement('div');
    expSection.className = 'section';
    const expTitle = document.createElement('h3');
    expTitle.textContent = currentLang === 'ar' ? 'الخبرات' : 'Experience';
    expSection.appendChild(expTitle);
    const expContent = document.createElement('p');
    expContent.innerHTML = experience.replace(/\n/g, '<br>');
    expSection.appendChild(expContent);
    right.appendChild(expSection);
    // Education section
    const eduSection = document.createElement('div');
    eduSection.className = 'section';
    const eduTitle = document.createElement('h3');
    eduTitle.textContent = currentLang === 'ar' ? 'التعليم' : 'Education';
    eduSection.appendChild(eduTitle);
    const eduContent = document.createElement('p');
    eduContent.innerHTML = education.replace(/\n/g, '<br>');
    eduSection.appendChild(eduContent);
    right.appendChild(eduSection);
    cv.appendChild(right);
    // Apply accent colours to titles and names
    styleSectionTitles(cv);
    previewContainer.appendChild(cv);
  } else {
    // traditional template
    const cv = document.createElement('div');
    cv.className = 'cv-traditional';
    const nameEl = document.createElement('div');
    nameEl.className = 'name';
    nameEl.textContent = name;
    cv.appendChild(nameEl);
    const titleEl = document.createElement('div');
    titleEl.className = 'title';
    titleEl.textContent = summary.split('\n')[0] || '';
    cv.appendChild(titleEl);
    // Contact information
    const contact = document.createElement('p');
    contact.innerHTML = `<strong>${currentLang === 'ar' ? 'البريد:' : 'Email:'}</strong> ${email}` + (phone ? ` | <strong>${currentLang === 'ar' ? 'الهاتف:' : 'Phone:'}</strong> ${phone}` : '');
    cv.appendChild(contact);
    // Summary section
    const summarySection = document.createElement('div');
    summarySection.className = 'section';
    const summaryTitle = document.createElement('h3');
    summaryTitle.textContent = currentLang === 'ar' ? 'الملخص' : 'Summary';
    summarySection.appendChild(summaryTitle);
    const summaryContent = document.createElement('p');
    summaryContent.innerHTML = summary.replace(/\n/g, '<br>');
    summarySection.appendChild(summaryContent);
    cv.appendChild(summarySection);
    // Experience section
    const expSection = document.createElement('div');
    expSection.className = 'section';
    const expTitle = document.createElement('h3');
    expTitle.textContent = currentLang === 'ar' ? 'الخبرات' : 'Experience';
    expSection.appendChild(expTitle);
    const expContent = document.createElement('p');
    expContent.innerHTML = experience.replace(/\n/g, '<br>');
    expSection.appendChild(expContent);
    cv.appendChild(expSection);
    // Education section
    const eduSection = document.createElement('div');
    eduSection.className = 'section';
    const eduTitle = document.createElement('h3');
    eduTitle.textContent = currentLang === 'ar' ? 'التعليم' : 'Education';
    eduSection.appendChild(eduTitle);
    const eduContent = document.createElement('p');
    eduContent.innerHTML = education.replace(/\n/g, '<br>');
    eduSection.appendChild(eduContent);
    cv.appendChild(eduSection);
    // Skills section
    const skillsSection = document.createElement('div');
    skillsSection.className = 'section';
    const skillsTitle = document.createElement('h3');
    skillsTitle.textContent = currentLang === 'ar' ? 'المهارات' : 'Skills';
    skillsSection.appendChild(skillsTitle);
    const skillsContent = document.createElement('p');
    skillsContent.innerHTML = skills.replace(/\n/g, '<br>');
    skillsSection.appendChild(skillsContent);
    cv.appendChild(skillsSection);
    // Apply accent colours to titles and names
    styleSectionTitles(cv);
    previewContainer.appendChild(cv);
  }
  // Show the preview container and display the download button
  previewContainer.style.display = 'block';
  const downloadBtn = document.getElementById('download-pdf-btn');
  if (downloadBtn) {
    downloadBtn.style.display = 'inline-block';
  }
}

// Export the generated CV as a PDF via the browser's print dialog.
// This function opens a new window containing only the CV preview and
// triggers the print dialog so the user can save it as a PDF. The
// preview includes the same styling as the builder page to preserve
// formatting.
function downloadPDF() {
  const previewContainer = document.getElementById('cv-preview');
  if (!previewContainer || !previewContainer.innerHTML.trim()) {
    alert(currentLang === 'ar'
      ? 'يرجى إنشاء السيرة الذاتية أولاً.'
      : 'Please generate your CV first.');
    return;
  }
  const printWindow = window.open('', '', 'height=842,width=595');
  // Write a basic HTML structure for printing
  printWindow.document.write('<html><head><title>CV</title>');
  printWindow.document.write('<link rel="stylesheet" href="style.css">');
  printWindow.document.write('</head><body>');
  printWindow.document.write(previewContainer.innerHTML);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  // Wait briefly to ensure styles are applied before printing
  printWindow.onload = function() {
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };
}