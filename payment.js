// Payment page script

// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
  // Ensure the user is logged in
  const currentEmail = localStorage.getItem('currentUser');
  if (!currentEmail) {
    // Not logged in; redirect to home
    window.location.href = 'index.html';
    return;
  }
  applyTranslations();
  // Language toggle
  const toggleBtn = document.getElementById('toggle-lang');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleLang);
  }
});

// Simulate payment process
function processPayment() {
  const currentEmail = localStorage.getItem('currentUser');
  if (!currentEmail) {
    return;
  }
  const users = JSON.parse(localStorage.getItem('cv_users') || '[]');
  const idx = users.findIndex(u => u.email === currentEmail);
  if (idx === -1) {
    return;
  }
  // Mark user as paid
  users[idx].paid = true;
  localStorage.setItem('cv_users', JSON.stringify(users));
  alert(translations[currentLang].payment_success);
  // Redirect to builder
  window.location.href = 'builder.html';
}