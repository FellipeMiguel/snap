const navToggle = document.getElementById('navToggle'),
  navContent = document.getElementById('navContent');

navToggle.addEventListener('click', () => {
  if (navContent.classList.contains('hidden')) {
    navContent.classList.remove('hidden');
  } else {
    navContent.classList.add('hidden');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Get the button and dropdown menu elements using data attributes
  const dropdownTrigger = document.querySelector('[data-dropdown-trigger]');
  const dropdownMenu = document.querySelector('[data-dropdown-menu]');

  // Toggle the visibility of the dropdown menu when the button is clicked
  dropdownTrigger.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
  });

  // Hide the dropdown menu when the user clicks outside of it
  document.addEventListener('click', (event) => {
    const isClickInside = dropdownMenu.contains(event.target) || dropdownTrigger.contains(event.target);
    if (!isClickInside) {
      dropdownMenu.classList.add('hidden');
    }
  });
});