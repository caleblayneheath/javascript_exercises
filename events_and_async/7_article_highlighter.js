let main = document.querySelector('main');
let navLinks = document.querySelector('header > ul');
let articles = [...document.querySelectorAll('article')];

let removeHighlighting = () => {
  let highlighted = document.querySelector('.highlight');
  if (highlighted) {
    highlighted.classList.remove('highlight');
  }
}

let addHighlighting = element => {
  removeHighlighting();

  if (element) {
    element.classList.add('highlight');
  }
}

articles.forEach(article => {
  article.addEventListener('click', e => {
    e.stopPropagation();
    addHighlighting(article);
  })
});

document.addEventListener('click', e => {
  addHighlighting(main);
});
