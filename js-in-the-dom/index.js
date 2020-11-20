let formBtn = document.getElementById('close-form');
let form = document.querySelector('form');

let toggler = () => {
  form.classList.toggle('hide');
  formBtn.innerText === 'X' ? formBtn.innerText = '+' : formBtn.innerText = 'X';
}

let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let emailList = [];

let validateForm = (e) => {
  e.preventDefault();
  if (!nameInput.value && !emailInput.value) {
    nameInput.style.border = '2px solid red';
    emailInput.style.border = '2px solid red';
    alert('You must enter a name and an email address to subscribe!');
  } else if (!nameInput.value) {
    nameInput.style.border = '2px solid red';
    alert('Please enter a name to subscribe!');
  } else if (!emailInput.value) {
    emailInput.style.border = '2px solid red';
    alert('Please enter an email address to subscribe!');
  } else {
    emailList.push({name: nameInput.value, email: emailInput.value});
    displayThankYou();
  }
};

form.addEventListener('submit', validateForm);

let formContainer = document.querySelector('.form-container');

let displayThankYou = () => {
  formContainer.innerText = 'Thank you for subscribing!';
  let removeMessage = () => formContainer.remove();
  setTimeout(removeMessage, 3000);
};

nameInput.addEventListener('change', () => {
  nameInput.style.border = 'none';
});

emailInput.addEventListener('change', () => {
  emailInput.style.border = 'none';
});