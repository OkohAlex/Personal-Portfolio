// Main JavaScript for Edache Okoh Portfolio

// Dark mode toggle
const toggle = document.getElementById('darkModeToggle');
if (toggle) {
  toggle.onclick = () => {
    document.body.classList.toggle('dark-mode');
    toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  };
}
