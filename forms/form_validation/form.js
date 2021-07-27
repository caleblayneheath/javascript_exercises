const ErrorMessages = {
  'first-name': 'This field is required.',
  'last-name': 'This field is required.',
  'email': 'Must be a valid email.',
  'password': 'Password must include at least 10 characters.',
  'phone': 'Phone number must be in correct format.',    
};

document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');
  let fields = document.querySelector('#fields');

  let submissionError = document.createElement('H2');
  submissionError.classList.add('error');
  submissionError.textContent = 'Fix errors before submitting form.'

  let firstName = document.querySelector('#first-name');
  let lastName = document.querySelector('#last-name');
  let email = document.querySelector('#email');
  let password = document.querySelector('#password');
  let phone = document.querySelector('#phone');
  let fieldInputs = [firstName, lastName, email, password, phone];

  let creditCard = document.querySelector('#credit-card')
  
  let allInputsValid = () => fieldInputs.every(elem => elem.validity.valid);

  let appendErrorMessage = input => {
    if (!input.validity.valid) {
      input.classList.add('invalid');
      input.insertAdjacentHTML('afterend', `<span class="error">${ErrorMessages[input.name]}</span>`);
    } else {
      input.classList.remove('invalid');
    }
  };

  let removeErrorMessage = element => {
    let errorMessage = element.nextElementSibling;
    if (errorMessage && errorMessage.classList.contains('error')) {
      errorMessage.remove();
    }
  };

  let validateNameInput = event => {
    const Regex = /[a-z']|\s/i;
    if (!Regex.test(event.key)) {
      event.preventDefault();
    };
  };

  let enforcePhonePattern = () => {
    const Regex = /(\d{3})(\d{3})(\d{4})/;
    let entry = phone.value;
    let parts = entry.replace(/\D/g, '').match(Regex);
    if (parts) {
      parts = [...parts];
      parts.shift();
      phone.value = parts.join('-');
    }
  };

  fields.addEventListener('focusout', event => {
    if (allInputsValid()) {
      submissionError.remove();
    }

    if (event.target.tagName !== 'INPUT') {
      return;
    }

    if(event.target === phone) {
      enforcePhonePattern();
    }

    appendErrorMessage(event.target);
  });


  fields.addEventListener('focusin', event => {
    if (event.target.tagName !== 'INPUT') {
      return;
    }
    
    removeErrorMessage(event.target);
  });

  firstName.addEventListener('keypress', validateNameInput);
  lastName.addEventListener('keypress', validateNameInput);

  creditCard.addEventListener('keypress', event => {
    const Regex = /\d/;
    if (!Regex.test(event.key)) {
      event.preventDefault();
    }
  });

  creditCard.addEventListener('keyup', event => {
    if (event.target.value.length >= 4 && creditCard.lastElementChild !== event.target) {
      event.target.nextElementSibling.focus();
    }    
  });

  let appendSerializedForm = () => {
    if (form.nextElementSibling) {
      form.nextElementSibling.remove();
    }

    form.insertAdjacentHTML('afterend', '<div><h2>Serialized Form</h2></div>');
  };

  form.addEventListener('submit', event => {
    event.preventDefault();

    if (allInputsValid()) {
      appendSerializedForm();
      let formDataDisplay = form.nextElementSibling;

      let data = new FormData(form);
      
      let cardNumber = data.getAll('credit-card').join('');
      data.delete('credit-card');

      let entries = [...data.entries()].concat([['credit-card', cardNumber]]);
      let queryString = (new URLSearchParams(entries)).toString();
      
      formDataDisplay.insertAdjacentHTML('beforeend', `<p>${queryString}</p>`);

    } else {
      form.parentElement.insertBefore(submissionError, form);
      fieldInputs.filter(element => !element.validity.valid)
        .forEach(element => {
          removeErrorMessage(element);
          appendErrorMessage(element);
        });
    }
  });
});