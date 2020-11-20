let formBtn = document.getElementById('close-form');
let form = document.querySelector('form');

let toggler = () => {
  form.classList.toggle('hide');
  formBtn.innerText === 'X' ? formBtn.innerText = '+' : formBtn.innerText = 'X';
}

let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');

// console.log(nameInput, emailInput);

