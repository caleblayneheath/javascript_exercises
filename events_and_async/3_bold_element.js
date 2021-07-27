"use strict";

let sectionElement = document.querySelector('section');

// function approach
// let makeBold = (element, callback) => {
//   element.style.fontWeight = 'bold';
//   if (callback) callback(element);
// };

// makeBold(sectionElement, function(elem) {
//   elem.classList.add('highlight');
// });

// makeBold(document.querySelector('p'));

// custom event approach
// makeBold bolds the argument element, and attaches an event
// that works as a sort of tag, so we can add an event listener to an
// element, 'if you've been bolded, execute this callback'

let makeBold = element => {
  element.style.fontWeight = 'bold';
  let bolded = new CustomEvent('bolded');
  element.dispatchEvent(bolded);
};

sectionElement.addEventListener('bolded', event => {
  alert(event.target.tagName);
  event.target.classList.add('highlight');
});

makeBold(sectionElement);

sectionElement.classList.contains('highlight') === true;
sectionElement.style.fontWeight === "bold";
