const cars = [
  { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
  { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
  { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
  { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
  { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
];

const filterKeys = ['make', 'model', 'year', 'price'];

let getSelections = (list, key) => [...new Set(list.map(elem => elem[key]))];

document.addEventListener('DOMContentLoaded', () => {
  let carTemplate = Handlebars.compile(document.querySelector('#car_template').innerHTML);
  let carList = document.querySelector('#listings');

  cars.forEach(car => carList.insertAdjacentHTML('beforeend', carTemplate(car)));

  filterKeys.forEach(filterKey => {
    let values = getSelections(cars, filterKey);

    if (typeof(values[0]) === 'number') {
      values = values.sort((a, b) => a - b);
    } else {
      values = values.sort();
    }

    let selector = document.querySelector(`#${filterKey}`);
    values.forEach(value => {
      selector.insertAdjacentHTML('beforeend', `<option value="${value}">${value}</option`);
    }); 
  });

  filters.addEventListener('submit', event => {
    event.preventDefault();

    let query = {};
    for (let [key, value] of new FormData(filters)) {
      if (value) {
        query[key] = value;
      }
    }
    
    let searchTerms = Object.keys(query);

    [...listings.children].forEach(listing => {
      let data = listing.dataset;
      if (searchTerms.every(term => query[term] === data[term])) {
        listing.classList.add('match');
      } else {
        listing.classList.remove('match');
      }
    });
  });
});
