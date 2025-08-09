// Storage service script

// Maximum capacity in bytes (2000 GB). 2000 * 1024^3 bytes ~ 2,147,483,648,000 bytes.
const MAX_STORAGE_BYTES = 2000 * 1024 * 1024 * 1024;

document.addEventListener('DOMContentLoaded', () => {
  // Ensure user is logged in and has paid before allowing access
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
  // Apply translations and set up language toggle
  applyTranslations();
  const toggleBtn = document.getElementById('toggle-lang');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleLang);
  }
  // Set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
  // Event listener for upload button
  const uploadBtn = document.getElementById('upload-btn');
  if (uploadBtn) {
    uploadBtn.addEventListener('click', handleUpload);
  }
  // Render existing files if any
  renderFiles();
});

// Retrieve file list from localStorage
function getFiles() {
  return JSON.parse(localStorage.getItem('cv_files') || '[]');
}

// Save file list to localStorage
function saveFiles(files) {
  localStorage.setItem('cv_files', JSON.stringify(files));
}

// Format bytes as readable text
function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const value = bytes / Math.pow(k, i);
  return value.toFixed(2) + ' ' + sizes[i];
}

// Update storage metrics display
function updateMetrics() {
  const files = getFiles();
  const usedBytes = files.reduce((acc, f) => acc + f.size, 0);
  const remainingBytes = Math.max(0, MAX_STORAGE_BYTES - usedBytes);
  const usedReadable = formatBytes(usedBytes);
  const remainingReadable = formatBytes(remainingBytes);
  const metricsDiv = document.getElementById('storage-metrics');
  if (metricsDiv) {
    // Build the metrics string depending on current language
    const usedLabel = translations[currentLang].storage_used;
    const remainingLabel = translations[currentLang].storage_remaining;
    metricsDiv.innerHTML = `<strong>${usedLabel}:</strong> ${usedReadable} &nbsp; | &nbsp; <strong>${remainingLabel}:</strong> ${remainingReadable}`;
  }
}

// Render the list of files in the table
function renderFiles() {
  const files = getFiles();
  const tbody = document.getElementById('files-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  files.forEach((file, index) => {
    const tr = document.createElement('tr');
    // Name
    const nameTd = document.createElement('td');
    nameTd.textContent = file.name;
    tr.appendChild(nameTd);
    // Size
    const sizeTd = document.createElement('td');
    sizeTd.textContent = formatBytes(file.size);
    tr.appendChild(sizeTd);
    // Date
    const dateTd = document.createElement('td');
    const date = new Date(file.uploadedAt);
    dateTd.textContent = date.toLocaleString(currentLang === 'ar' ? 'ar' : 'en');
    tr.appendChild(dateTd);
    // Delete button
    const delTd = document.createElement('td');
    const delBtn = document.createElement('button');
    delBtn.textContent = translations[currentLang].delete_file;
    delBtn.style.backgroundColor = '#d9534f';
    delBtn.style.color = 'white';
    delBtn.style.border = 'none';
    delBtn.style.padding = '0.3rem 0.6rem';
    delBtn.style.cursor = 'pointer';
    delBtn.addEventListener('click', () => deleteFile(index));
    delTd.appendChild(delBtn);
    tr.appendChild(delTd);
    tbody.appendChild(tr);
  });
  updateMetrics();
}

// Handle file upload
function handleUpload() {
  const input = document.getElementById('file-input');
  if (!input || !input.files || input.files.length === 0) {
    alert(currentLang === 'ar' ? 'يرجى اختيار ملف أولاً.' : 'Please select a file first.');
    return;
  }
  const files = Array.from(input.files);
  let currentFiles = getFiles();
  // Calculate current used capacity
  const usedBytes = currentFiles.reduce((acc, f) => acc + f.size, 0);
  // Loop through selected files
  for (const file of files) {
    const size = file.size;
    // Check if adding this file exceeds capacity
    if (usedBytes + size > MAX_STORAGE_BYTES) {
      alert(currentLang === 'ar'
        ? 'لا توجد مساحة كافية لرفع هذا الملف.'
        : 'Not enough storage space for this file.');
      continue;
    }
    // Append metadata. We store only the metadata to avoid large storage usage.
    currentFiles.push({
      name: file.name,
      size: size,
      uploadedAt: Date.now()
    });
  }
  saveFiles(currentFiles);
  // Clear the input value so the same file can be selected again if needed
  input.value = '';
  renderFiles();
}

// Delete a file by index
function deleteFile(index) {
  let files = getFiles();
  if (index < 0 || index >= files.length) return;
  files.splice(index, 1);
  saveFiles(files);
  renderFiles();
}