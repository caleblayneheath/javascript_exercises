function get(path) {
  return () => {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open('GET', path);
      request.responseType = 'json';
      request.send();

      request.onload = () => {
        switch(request.status) {
          case 200:
            resolve(request.response);
            break;
          default:
            reject('Could not load ' + path);
            break;
        }
      };
    });
  };
}

function cancelSchedule(scheduleId) {
  cancelBooking(scheduleId);
  setTimeout(() => {
    let request = new XMLHttpRequest();
    request.open('DELETE', `/api/schedules/${scheduleId}`);
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    let data = { schedule_id: scheduleId };
    request.send(JSON.stringify(data));

    request.onload = () => {
      switch(request.status) {
        case 204:
          alert('Schedule id: ' + scheduleId + ' cancelled.');
          break;
        default:
          alert(request.response)
          break;
      }   
    };
  }, 250);    
}

function cancelBooking(bookingId) {
  let request = new XMLHttpRequest();
  request.open('PUT', `/api/bookings/${bookingId}`);
  request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
  let data = { booking_id: bookingId };
  request.send(JSON.stringify(data));

  request.onLoad = () => {
    switch(request.status) {
      case 204:
        alert('Booking id: ' + schedule_id + ' cancelled.');
        break;
      default:
        alert(request.response)
        break;
    }   
  };
}

document.addEventListener('DOMContentLoaded', () => {
  let formHolder = document.querySelector('#formholder');
  let scheduleButton = document.querySelector('#schedulebutton');
  let bookingButton = document.querySelector('#bookingbutton');
  
  let scheduleForm;
  let bookingForm;

  let loadCancelSchedule = () => {
    formHolder.replaceChildren();
    scheduleForm = document.createElement('FORM');
    formHolder.appendChild(scheduleForm);  

    scheduleForm.insertAdjacentHTML('beforeend', '<legend>Cancel Schedule</legend>');
    scheduleForm.insertAdjacentHTML('beforeend', "<select name='schedule_id'></select>");
    scheduleForm.insertAdjacentHTML('beforeend', "<br><br><input type='submit' value='Cancel'>");  

    let getSchedules = get('/api/schedules');
    let getStaffs = get('/api/staff_members');

    let schedules;
    let staffs;
    
    (async () => {      
      await Promise.all([getSchedules().then(result => schedules = result),
      getStaffs().then(result => staffs = result)]);


      let selector = formHolder.querySelector('select');
      schedules.forEach(schedule => {
        let staff = staffs.filter(({id}) => schedule.staff_id === id)[0].name;

        let option = document.createElement('OPTION');
        option.value = schedule.id;
        option.textContent = `${staff} | ${schedule.date} | ${schedule.time}`;
        selector.appendChild(option);
      });

      scheduleForm.addEventListener('submit', event => {
        event.preventDefault();
        let data = new FormData(scheduleForm);
        cancelSchedule(data.get('schedule_id'));
        setTimeout(() => loadCancelSchedule(), 250);
      });
    })();
  };

  let loadCancelBooking = () => {
    formHolder.replaceChildren();
    bookingForm = document.createElement('FORM');
    formHolder.appendChild(bookingForm);  

    bookingForm.insertAdjacentHTML('beforeend', '<legend>Cancel Booking</legend>');
    bookingForm.insertAdjacentHTML('beforeend', "<select name='booking_id'></select>");
    bookingForm.insertAdjacentHTML('beforeend', "<br><br><input type='submit' value='Cancel'>");  

    let getBookings = get('/api/schedules');
    let getStaffs = get('/api/staff_members');

    let bookings;
    let staffs;
    
    (async () => {      
      await Promise.all([getBookings().then(result => bookings = result.filter(({student_email}) => student_email)),
      getStaffs().then(result => staffs = result)]);


      let selector = formHolder.querySelector('select');
      bookings.forEach(booking => {
        let staff = staffs.filter(({id}) => booking.staff_id === id)[0].name;

        let option = document.createElement('OPTION');
        option.value = booking.id;
        option.textContent = `${staff} | ${booking['student_email']} | ${booking.date} | ${booking.time}`;
        selector.appendChild(option);
      });

      bookingForm.addEventListener('submit', event => {
        event.preventDefault();
        let data = new FormData(bookingForm);
        cancelBooking(data.get('booking_id'));
        setTimeout(() => loadCancelBooking(), 250);
      });
    })();
  };

  scheduleButton.addEventListener('click', event => {
    formHolder.replaceChildren();
    loadCancelSchedule();
  });

  bookingButton.addEventListener('click', event => {
    formHolder.replaceChildren();
    loadCancelBooking();
  });

});