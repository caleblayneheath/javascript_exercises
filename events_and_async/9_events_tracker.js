let tracker = (() => {
  let events = [];
  return {
    add(event) {
      events.push(event);
    },
    list() {
      return [...events];
    },
    elements() {
      return events.map(({target}) => target);
    },
    clear() {
      events = [];
      return events.length;
    },
  };
})();

function track(callback) {
  return event => {
    if (!tracker.list().includes(event)) {
      tracker.add(event);
    }
    return callback(event);
  };
}

let divRed = document.querySelector('#red');
let divBlue = document.querySelector('#blue');
let divGreen = document.querySelector('#green');
let divOrange = document.querySelector('#orange');

divRed.addEventListener('click', track(event => {
  document.body.style.background = 'red';
}));

divBlue.addEventListener('click', track(event => {
  event.stopPropagation();
  document.body.style.background = 'blue';
}));

divOrange.addEventListener('click', track(event => {
  document.body.style.background = 'orange';
}));

divGreen.addEventListener('click', track(event => {
  document.body.style.background = 'green';
}));

let test = () => {
  console.log(tracker.list().length === 4);
  console.log(tracker.elements()); // [div#blue, div#red, div#orange, div#green]
  console.log(tracker.elements()[0] === document.querySelector('#blue'));
  console.log(tracker.elements()[3] === document.querySelector('#green'));
  console.log(tracker.clear() === 0);
  console.log(tracker.list()); // []
  console.log(tracker.list()[0] = 'abc');
  console.log(tracker.list().length === 0);
};
