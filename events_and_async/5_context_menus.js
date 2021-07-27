let main = document.querySelector('main');
let sub = document.querySelector('#sub');

main.addEventListener('contextmenu', e => {
  e.preventDefault();
  alert('main');
});

sub.addEventListener('contextmenu', e => {
  e.preventDefault();
  e.stopPropagation();
  alert('sub');
});


