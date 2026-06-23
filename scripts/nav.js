document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.header.w-nav');
  const menuBtn = document.querySelector('.menu-button.w-nav-button');
  const navMenu = document.querySelector('.nav-menu.w-nav-menu');
  const dropdown = document.querySelector('.header .w-dropdown');
  const dropdownToggle = document.querySelector('.header .w-dropdown-toggle');
  const dropdownList = document.querySelector('.header .w-dropdown-list');

  // Mobile menu toggle — use data-nav-menu-open so Webflow CSS positions
  // the menu absolutely below the navbar (top:100%, left:0, right:0) instead
  // of flowing it inline inside the flex row between logo and hamburger button.
  menuBtn?.addEventListener('click', () => {
    if (!nav) return;
    const isOpen = !nav.classList.contains('w-nav-open');
    nav.classList.toggle('w-nav-open', isOpen);
    menuBtn.classList.toggle('w--open', isOpen);
    if (navMenu) {
      if (isOpen) {
        navMenu.setAttribute('data-nav-menu-open', '');
      } else {
        navMenu.removeAttribute('data-nav-menu-open');
        // Also close any open dropdown when the menu closes
        dropdown?.classList.remove('w--open');
        dropdownList?.classList.remove('w--open');
      }
    }
  });

  // Services dropdown toggle
  dropdownToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = !dropdown.classList.contains('w--open');
    dropdown.classList.toggle('w--open', isOpen);
    dropdownList?.classList.toggle('w--open', isOpen);
  });

  // Close nav dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!dropdown?.contains(e.target)) {
      dropdown?.classList.remove('w--open');
      dropdownList?.classList.remove('w--open');
    }
  });

  // FAQ accordion (used on /frequently-asked-questions)
  document.querySelectorAll('.faq.w-dropdown').forEach((faq) => {
    const toggle = faq.querySelector('.w-dropdown-toggle');
    const list = faq.querySelector('.w-dropdown-list');
    faq.style.height = '80px';
    toggle?.addEventListener('click', () => {
      const isOpen = !faq.classList.contains('w--open');
      faq.classList.toggle('w--open', isOpen);
      list?.classList.toggle('w--open', isOpen);
      faq.style.height = isOpen ? '' : '80px';
    });
  });
});
