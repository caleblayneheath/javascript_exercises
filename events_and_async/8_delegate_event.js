function delegateEvent(parentElement, selector, eventType, callback) {
  if (parentElement) {
    return !parentElement.addEventListener(eventType, e => {
      let validTargets = [...parentElement.querySelectorAll(selector)];
      if (validTargets.includes(e.target)) {
        callback(e);
      }
    });
  }
}

// Possible elements for use with the scenarios
let element1 = document.querySelector('table');
let element2 = document.querySelector('main h1');
let element3 = document.querySelector('main');

let callback = ({target, currentTarget}) => {
  alert(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
};

// scen 1
// delegateEvent(element1, 'p', 'click', callback);

// scen 2
// delegateEvent(element2, 'p', 'click', callback);

// scen 3
// delegateEvent(element2, 'h1', 'click', callback);

// scen 4
// delegateEvent(element3, 'h1', 'click', callback);

// scen 5
// delegateEvent(element3, 'aside p', 'click', callback);

// scen 6
delegateEvent(element2, 'p', 'click', callback);
let newP = document.createElement('P');
let newContent = document.createTextNode('New Paragraph');
newP.appendChild(newContent);

element2.appendChild(newP);
