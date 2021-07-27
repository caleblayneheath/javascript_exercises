document.addEventListener('DOMContentLoaded', () => {
  function get(path, errorMessage) {
    return () => {
      return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open('GET', path);
        request.responseType = 'json';
        request.send();

        request.onload = () => {
          if (request.status === 200) {
            resolve(request.response); 
          } else {
            reject(errorMessage);
          }
        };      
      });
    };
  }

  async function loadSchedules() {  
    let schedules, staffs;
    let getSchedules = get('/api/schedules', 'Schedules could not be loaded. Please refresh page.');
    let getStaffs = get('/api/staff_members', 'Staff could not be loaded. Please refresh page.');

    await Promise.all(
      [getSchedules().then(result => schedules = result),
      getStaffs().then(result => staffs = result)]
    ).then(() => {
      while(scheduleSelector.children.length !== 0) {
        scheduleSelector.remove(scheduleSelector.firstChild);
      }

      schedules.forEach(schedule => {
        if (schedule['student_email']) {
          return;
        }

        let staffName = staffs.filter(staff => staff.id === schedule.staff_id)[0].name;

        let newOption = document.createElement('OPTION');
        newOption.value = schedule.id;
        newOption.textContent = [staffName, schedule.date, schedule.time].join(' | ');
        scheduleSelector.appendChild(newOption);
      })

      scheduleField.disabled = false;
     });
  }

  function formDataToJson(formData) {
    let json = {};
    for (let [key, value] of formData) {
      json[key] = value;
    }
    return json;
  }

  function loadNewStudentForm() {
    let newEmailField = document.querySelector('#new-student-email');
    newEmailField.value = email;
    
    let bookingField = document.querySelector('#booking-field');
    bookingField.value = bookingSequence;

    newStudentForm.hidden = false;
  }

  function resetForms() {
    scheduleForm.reset();
    scheduleField.disabled = true;
    loadSchedules();

    newStudentForm.reset();
    newStudentForm.hidden = true;
  }

  let scheduleField = document.querySelector('#schedule-field');
  let scheduleSelector = document.querySelector('#schedule-selector');
  let scheduleForm = document.querySelector('#schedule-form');
  let newStudentForm = document.querySelector('#new-student-form');
  
  let bookingSequence;
  let email;

  loadSchedules();

  scheduleForm.addEventListener('submit', event => {
    let form = scheduleForm;
    event.preventDefault();
    let request = new XMLHttpRequest();
    request.open(form.method, form.action);
    request.setRequestHeader('Content-Type', 'application/json');

    let json = formDataToJson(new FormData(form));
    request.send(JSON.stringify(json));

    request.addEventListener('load', event => {
      switch(request.status) {
        case 204:
          alert('Booked');
          resetForms();
          break;
        case 404:
          alert(request.responseText);
          bookingSequence = request.response.replace(/\D/g, '');
          email = document.querySelector('#student-email').value;
          loadNewStudentForm();
          break;
      }
    });
  });

  newStudentForm.addEventListener('submit', event => {
    event.preventDefault();
    let form = newStudentForm;
    let request = new XMLHttpRequest();
    request.open(form.method, form.action);
    request.setRequestHeader('Content-Type', 'application/json');

    let json = formDataToJson(new FormData(form));
    json['booking_sequence'] = Number(json['booking_sequence']);
    request.send(JSON.stringify(json));

    request.addEventListener('load', event => {
      switch(request.status) {
        case 201:
          alert(request.response);
          scheduleForm.requestSubmit();
          break;
        case 400:
          alert(request.response);
          break;
        case 403:
          alert('Please refresh the page and try again.');
          break;
      }
    });
  });
});