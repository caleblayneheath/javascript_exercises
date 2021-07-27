document.addEventListener('DOMContentLoaded', () => {
  let addSchedule = document.querySelector('#add-schedule');
  let submitSchedule = document.querySelector('#submit-schedule');
  let formContainer = document.querySelector('#form-container');
  let firstForm = formContainer.firstElementChild;
  let select = firstForm.querySelector('select');

  // promise to get staff data for population dropdown menus
  let getStaffs = new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open('GET', '/api/staff_members');
    request.responseType = 'json';
    request.send();
  
    request.onload = () => {
      if (request.status === 200) {
        resolve(request.response);
      }
    };
  }); 

  // once promise fulfilled, populate selection options
  getStaffs.then(staffs => {
    staffs.forEach(staff => {
      let option = document.createElement('OPTION');
      option.textContent = staff.name;
      option.value = staff.id;
      select.appendChild(option);
    });
  });

  // clone new schedule forms from origin when button clicked,
  // keep track of number of schedules in IIFE
  (() => {
    let count = 1;
    addSchedule.addEventListener('click', event => {
      let newForm = firstForm.cloneNode(true);
      newForm.reset();
      count += 1;
      newForm.querySelector('h3').textContent = 'Schedule ' + count;
      formContainer.appendChild(newForm);
    });
  })();
  
  // when submitting, get form data from each form and add to data object
  submitSchedule.addEventListener('click', event => {
    let data = { schedules: [] };
    let allForms = [...formContainer.querySelectorAll('form')];
    allForms.forEach(form => {
      let schedule = {};
      let formData = new FormData(form);
      for (let [key, value] of formData) {
        schedule[key] = value;
      }
      data.schedules.push(schedule);
    });

    let request = new XMLHttpRequest();
    request.open('POST', '/api/schedules');
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(data));

    request.addEventListener('load', () => {
      switch(request.status) {
        case 201:
          alert(request.responseText);
          allForms.forEach(form => form.reset());
          break;
        case 400:
          alert(request.responseText);
          break;
      }
    });
  });
});