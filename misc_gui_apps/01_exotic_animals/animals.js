document.addEventListener('DOMContentLoaded', () => {
  let showCaption = () => activeCaption.classList.add('visible');
  let hideCaption = () => activeCaption.classList.remove('visible');

  let timer;
  let activeCaption;
  
  document.querySelector('#gallery').addEventListener('mouseover', event => {
    if (event.target.tagName === 'IMG') {
      activeCaption = event.target.nextElementSibling;
      timer = setTimeout(() => showCaption(), 2000);
    }   
  });

  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('mouseleave', event => {
      clearTimeout(timer);
      hideCaption();
    });
  });
});