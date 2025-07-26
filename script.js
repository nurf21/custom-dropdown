document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggle = document.getElementById('dropdownToggle');
  const dropdownMenu = document.getElementById('dropdownMenu');
  const dropdownValue = document.querySelector('.dropdown-value');
  const currentState = document.getElementById('currentState');
  const selectedItem = document.getElementById('selectedItem');
  const dropdownItems = document.querySelectorAll('.dropdown-item');

  let isOpen = false;
  let selectedValue = null;

  // Toggle dropdown
  dropdownToggle.addEventListener('click', () => {
    isOpen = !isOpen;
    updateDropdownState();
  });

  // Handle item selection
  dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
      selectedValue = item.textContent;
      dropdownValue.textContent = selectedValue;
      dropdownValue.classList.remove('placeholder');

      // Update selected state
      dropdownItems.forEach(i => i.classList.remove('selected'));
      item.classList.add('selected');

      isOpen = false;
      updateDropdownState();

      // Update state display
      currentState.textContent = "Selected (closed)";
      selectedItem.textContent = selectedValue;
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
      isOpen = false;
      updateDropdownState();
    }
  });

  // Close dropdown with ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      isOpen = false;
      updateDropdownState();
    }
  });

  // Update dropdown appearance based on state
  function updateDropdownState() {
    if (isOpen) {
      dropdownMenu.classList.add('open');
      dropdownToggle.classList.add('open');
      dropdownToggle.querySelector('i').className = 'fas fa-chevron-up';
      currentState.textContent = "Open";
    } else {
      dropdownMenu.classList.remove('open');
      dropdownToggle.classList.remove('open');
      dropdownToggle.querySelector('i').className = 'fas fa-chevron-down';
      currentState.textContent = selectedValue ? "Selected (closed)" : "Default (closed)";
    }
  }
});