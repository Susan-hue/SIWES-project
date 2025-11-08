const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const genreSelect = document.getElementById('genre');
const successMessage = document.getElementById('successMessage');

const errors = {
  name: document.getElementById('nameError'),
  email: document.getElementById('emailError'),
  password: document.getElementById('passwordError'),
  genre: document.getElementById('genreError')
};

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let isValid = true;

  
  if (nameInput.value.trim() === '') {
    errors.name.classList.remove('hidden');
    isValid = false;
  } else {
    errors.name.classList.add('hidden');
  }

  
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    errors.email.classList.remove('hidden');
    isValid = false;
  } else {
    errors.email.classList.add('hidden');
  }


  if (passwordInput.value.length < 6) {
    errors.password.classList.remove('hidden');
    isValid = false;
  } else {
    errors.password.classList.add('hidden');
  }

 
  if (genreSelect.value === '') {
    errors.genre.classList.remove('hidden');
    isValid = false;
  } else {
    errors.genre.classList.add('hidden');
  }

  
  if (isValid) {
    successMessage.classList.remove('hidden');
    form.reset();


    setTimeout(() => {
      successMessage.classList.add('hidden');
    }, 3000);
  }
});
