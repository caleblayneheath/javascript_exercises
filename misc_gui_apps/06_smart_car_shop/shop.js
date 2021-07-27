const cars = [
  { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
  { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
  { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2005, price: 12500 },
  { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
  { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
];

const filterKeys = ['make', 'model', 'year', 'price'];

let getSelections = (list, key) => [...new Set(list.map(elem => elem[key]))];

document.addEventListener('DOMContentLoaded', () => {
  let carTemplate = Handlebars.compile(document.querySelector('#car_template').innerHTML);
  let filtersTemplate = Handlebars.compile(document.querySelector('#filters_template').innerHTML);
  let carList = document.querySelector('#listings');
  let searchForm = document.querySelector('#search');
  let filters = document.querySelector('#filters');
  let validCars = [...cars];

  let loadListings = () => {
    carList.replaceChildren()
    validCars.forEach(car => carList.insertAdjacentHTML('beforeend', carTemplate(car)));
  };

  let loadFilters = () => {
    filters.replaceChildren();
    filters.insertAdjacentHTML('afterbegin', filtersTemplate());

    filterKeys.forEach(filterKey => {
      let values = getSelections(validCars, filterKey);

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
  };

  loadFilters();
  loadListings();  

  filters.addEventListener('input', event => {
    let selections = {};
    filterKeys.forEach(key => {
      let value = filters.querySelector(`#${key}`).value;
      selections[key] = value;
    });

    let key = event.target.name;
    let value = event.target.value;
    
    if (value.length > 0) {
      validCars = validCars.filter(car => car[key].toString() === value);
    }
    
    loadFilters();

    filterKeys.forEach(key => {
      let value = selections[key];
      let selector = document.querySelector(`[name ="${key}"]`);
      let option = selector.querySelector(`[value="${selections[key]}"]`);
      option.selected = true;
    });
  });

  search.addEventListener('submit', event => {
    event.preventDefault();
    loadListings();
  });

  search.addEventListener('reset', event => {
    event.preventDefault();
    validCars = [...cars];
    loadFilters();
    loadListings();
  });
});
