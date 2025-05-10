document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('nav ul');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show-menu');
  });

  // Booking form validation and submission simulation
  const bookingForm = document.getElementById('bookingForm');
  const fullName = bookingForm.querySelector('#fullName');
  const emailAddress = bookingForm.querySelector('#emailAddress');
  const serviceSelect = bookingForm.querySelector('#serviceSelect');
  const messageInput = bookingForm.querySelector('#message');
  const statusMsg = document.getElementById('formStatusMessage');

  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return re.test(email);
  }

  function showError(input, message) {
    const errorSpan = input.nextElementSibling;
    errorSpan.textContent = message;
    input.setAttribute('aria-invalid', 'true');
  }

  function clearError(input) {
    const errorSpan = input.nextElementSibling;
    errorSpan.textContent = '';
    input.removeAttribute('aria-invalid');
  }

  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    // Validate full name
    if (!fullName.value.trim()) {
      showError(fullName, 'Full name is required.');
      valid = false;
    } else {
      clearError(fullName);
    }

    // Validate email
    if (!emailAddress.value.trim()) {
      showError(emailAddress, 'Email address is required.');
      valid = false;
    } else if (!isValidEmail(emailAddress.value.trim())) {
      showError(emailAddress, 'Please enter a valid email address.');
      valid = false;
    } else {
      clearError(emailAddress);
    }

    // Validate service select
    if (!serviceSelect.value) {
      showError(serviceSelect, 'Please select a service.');
      valid = false;
    } else {
      clearError(serviceSelect);
    }

    // Validate message
    if (!messageInput.value.trim()) {
      showError(messageInput, 'Please provide additional details.');
      valid = false;
    } else {
      clearError(messageInput);
    }

    if (!valid) {
      statusMsg.textContent = '';
      return;
    }

    // Simulate form submission feedback
    statusMsg.style.color = '#00796b';
    statusMsg.textContent = 'Submitting your booking...';

    bookingForm.querySelector('button[type="submit"]').disabled = true;

    setTimeout(() => {
      statusMsg.textContent = 'Thank you! Your booking request has been submitted.';
      bookingForm.reset();
      bookingForm.querySelector('button[type="submit"]').disabled = false;
    }, 1800);
  });
});
