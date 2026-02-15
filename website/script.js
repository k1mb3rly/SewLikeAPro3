// ===== Collapsible Sections =====
document.addEventListener('DOMContentLoaded', function () {
  // Initialize collapsible sections
  document.querySelectorAll('.collapsible-header').forEach(function (header) {
    header.addEventListener('click', function () {
      const section = header.closest('.collapsible');
      section.classList.toggle('open');
    });
  });

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    // Close nav when clicking a link (mobile)
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }
});
