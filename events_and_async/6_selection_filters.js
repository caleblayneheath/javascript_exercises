let classificationFilters = {
  'Vertebrate': ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
  'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
  'Cold-blooded': ['Salmon', 'Turtle'],
  'Mammal':	['Bear', 'Whale'],
  'Bird': ['Ostrich'],
};

let animalFilters = {
  'Bear': ['Vertebrate', 'Warm-blooded', 'Mammal'],
  'Turtle':	['Vertebrate', 'Cold-blooded'],
  'Whale': ['Vertebrate', 'Warm-blooded', 'Mammal'],
  'Salmon':	['Vertebrate', 'Cold-blooded'],
  'Ostrich': ['Vertebrate', 'Warm-blooded', 'Bird'],
}

let classifications = document.querySelector('#animal-classifications');
let animals = document.querySelector('#animals');
let clear = document.querySelector('#clear');

let selectionChange = (selectionNode, optionsNode, filter) => {
  let validOptions = filter[selectionNode.value] || [];
  let allOptions = [...optionsNode.children];

  allOptions.forEach(option => {
    if (!validOptions.includes(option.value)) {
      option.hidden = true;
      option.removeAttribute('selected');
    }
  });

  let firstOption = allOptions.find(option => !option.hidden);
  if (firstOption) {
    firstOption.selected = true;
  }
};

let resetSelections = node => {
  let allOptions = [...optionsNode.children];
  
  allOptions.forEach(option => {
    option.removeAttribute('hidden');
    option.removeAttribute('selected');
  });
  
  allOptions[0].selected = 'true';
}

classifications.addEventListener('change', () => {
  selectionChange(classifications, animals, classificationFilters);
});

animals.addEventListener('change', () => {
  selectionChange(animals, classifications, animalFilters);
});

clear.addEventListener('click', () => {
  resetSelections(classifications);
  resetSelections(animals);
});

