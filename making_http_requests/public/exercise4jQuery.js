$(document).ready(() => {
  let addSchedule = document.querySelector('#add-schedule');
  let submitSchedule = document.querySelector('#submit-schedule');
  let formContainer = document.querySelector('#form-container');
  let firstForm = formContainer.firstElementChild;
  let select = firstForm.querySelector('select');

  let $addSchedule = $('#add-schedule');
  let $submitSchedule = $('#submit-schedule');
  let $formContainer = $('#form-container');
  let $firstForm = $('#form-container form').first();
  let $select = $firstForm.children('select');

  (function populateDropdowns() {
    $.ajax({
      url: '/api/staff_members',
      type: 'GET',
      dataType: 'json',
    }).done(staffs => {
      staffs.forEach(staff => {
        let option = document.createElement('OPTION');
        option.textContent = staff.name;
        option.value = staff.id;
        select.appendChild(option);
      });
    });
  })();

  (function bindAddScheduleButton() {
    let count = 1;
    $addSchedule.on('click', event => {
      let newForm = $firstForm.clone()[0];
      newForm.reset();
      count += 1;
      newForm.querySelector('h3').textContent = 'Schedule ' + count;
      formContainer.appendChild(newForm);
    });
  })();
  
  // when submitting, get form data from each form and add to data object
  (function bindSubmitScheduleButton() {
    $submitSchedule.on('click', event => {
      let data = { schedules: [] };
      let $allForms = $('#form-container form');
      $allForms.each(function () {
        let schedule = {};
        let formData = new FormData(this);
        for (let [key, value] of formData) {
          schedule[key] = value;
        }
        data.schedules.push(schedule);
      });

      $.ajax({
        url: '/api/schedules',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        statusCode: {
          201: function() { $allForms.each(function() { this.reset() }) },
        },
        complete: function(request) { alert(request.responseText) },
      });
    });
  })();
});

