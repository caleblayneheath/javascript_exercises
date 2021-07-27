document.addEventListener('DOMContentLoaded', () => {
  function get(path) {
    return (() => {
      return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open('GET', path);
        request.responseType ='json';
        request.send();

        request.onload = () => {
          switch(request.status) {
            case 200:
              resolve(request.response);
            default:
              reject('Could not load ' + path);
          }
        };
      });
    });
  }

  async function populateDateList() {
    let dates;
    let getDates = get('/api/bookings');
    await getDates().then(result => dates = result);
    
    dates.forEach(date => {
      let item = document.createElement('LI');
      item.textContent = date;
      item.classList.add('date-item');
      dateList.appendChild(item);
    });
  }

  let dateList = document.querySelector('#date-list');
  
  populateDateList();

  dateList.addEventListener('click', event => {
    if (!event.target.classList.contains('date-item')) {
      return;
    }

    let dateItem = event.target;
    // if you click the date after loading bookings, hide the bookings
    if (dateItem.childElementCount !== 0) {
      dateItem.firstElementChild.hidden = !dateItem.firstElementChild.hidden;
      return;
    }

    let date = dateItem.textContent;
    let getBookings = get(`/api/bookings/${date}`);
    (async () => {
      dateItem.appendChild(document.createElement('UL'));
      let bookings;
      await getBookings().then(result => bookings = result);
      bookings.forEach(booking => {
        let bookingItem = document.createElement('LI');
        bookingItem.textContent = booking.join(' | ');
        dateItem.firstElementChild.appendChild(bookingItem);
      });
    })();
  });
});