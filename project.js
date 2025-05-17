document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const reason = document.getElementById('reason');
  const sexRadios = document.getElementsByName('sex');
  const errors = document.querySelectorAll('.error');


  errors.forEach(e => e.textContent = '');

  let isValid = true;

  if (!firstName.value.trim()) {
    firstName.nextElementSibling.textContent = 'required';
    isValid = false;
  }
  if (!lastName.value.trim()) {
    lastName.nextElementSibling.textContent = 'required';
    isValid = false;
  }
  if (!email.value.trim()) {
    email.nextElementSibling.textContent = 'required';
    isValid = false;
  }
  if (!password.value.trim()) {
    password.nextElementSibling.textContent = 'required';
    isValid = false;
  }
  if (!reason.value.trim()) {
    reason.nextElementSibling.textContent = 'required';
    isValid = false;
  }

  let sex = '';
  for (let radio of sexRadios) {
    if (radio.checked) {
      sex = radio.value;
      break;
    }
  }

  if (!sex) {
    sexRadios[2].parentElement.parentElement.nextElementSibling.textContent = 'required';
    isValid = false;
  }

  if (isValid) {
    localStorage.setItem('firstName', firstName.value);
    localStorage.setItem('lastName', lastName.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('sex', sex);
    localStorage.setItem('reason', reason.value);

    window.location.href = 'proj_profile_Toledo.html';
  }
});
