const languages = [
  {
    name: 'Ruby',
    description: 'Ruby is a dynamic, reflective, object-oriented, ' +
    'general-purpose programming language. It was designed and developed in the mid-1990s ' +
    'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
    'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
    'including functional, object-oriented, and imperative. It also has a dynamic type ' +
    'system and automatic memory management.'
  },

  {
    name: 'JavaScript',
    description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
    'programming language. It has been standardized in the ECMAScript language ' +
    'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
    'technologies of World Wide Web content production; the majority of websites employ ' +
    'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
    'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
    'supporting object-oriented, imperative, and functional programming styles.'
  },

  {
    name: 'Lisp',
    description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
    'with a long history and a distinctive, fully parenthesized prefix notation. ' +
    'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
    'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
    'since its early days, and many dialects have existed over its history. Today, the best '+
    'known general-purpose Lisp dialects are Common Lisp and Scheme.'
  },

  {
    name: 'Brainf#@k',
    description: 'Why would you even?',
  }
];

let article_template = Handlebars.compile(document.querySelector('#article_template').innerHTML);
let article_list_template = Handlebars.compile(document.querySelector('#article_list_template').innerHTML);
Handlebars.registerHelper('isLong', string => string.length > 120);
Handlebars.registerHelper('shortenDescription', string => string.slice(0, 120));
Handlebars.registerPartial('articleTemplate', document.querySelector('#article_template').innerHTML);

document.addEventListener('DOMContentLoaded', () => {
  let main = document.querySelector('main');
  
  main.insertAdjacentHTML('afterbegin', article_list_template({articles: languages}));

  main.addEventListener('mouseup', event => {
    if (event.target.tagName !== 'BUTTON') {
      return;
    }

    let article = event.target.closest('article');
    let paragraph = article.querySelector('p');
    let button = article.querySelector('button');
    let language = languages.filter(({name}) => name === article.dataset.name)[0];

    let buttonType = button.dataset.type;
    
    if (buttonType === 'more') {
      paragraph.textContent = language.description;
      button.textContent = 'Show Less';
      button.setAttribute('data-type', 'less');
    } else if (buttonType === 'less') {
      paragraph.textContent = language.description.slice(0, 120) + ' ...';
      button.textContent = 'Show More';
      button.setAttribute('data-type', 'more');
    }
  });
});