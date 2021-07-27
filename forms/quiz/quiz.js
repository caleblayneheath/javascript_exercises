const questions = [
  {
    id: 1,
    description: "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
    options: ['Dan Simmons', 'Douglas Adams', 'Stephen Fry', 'Robert A. Heinlein'],
  },
  {
    id: 2,
    description: 'Which of the following numbers is the answer to Life, the \
                  Universe and Everything?',
    options: ['66', '13', '111', '42'],
  },
  {
    id: 3,
    description: 'What is Pan Galactic Gargle Blaster?',
    options: ['A drink', 'A machine', 'A creature', 'None of the above'],
  },
  {
    id: 4,
    description: 'Which star system does Ford Prefect belong to?',
    options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri'],
  },
];

const answerKey = { '1': 'Douglas Adams', '2': '42', '3': 'A drink', '4': 'Betelgeuse' };

let questionTemplate = Handlebars.compile(document.querySelector('#question-template').innerHTML);
Handlebars.registerPartial("question", questionTemplate);
let quizTemplate = Handlebars.compile(document.querySelector('#quiz-template').innerHTML);

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('beforeend', quizTemplate({'questions': questions}));

  let form = document.querySelector('form');
  let questionFields = [...form.querySelectorAll('fieldset')];

  form.addEventListener('submit', event => {
    event.preventDefault();
    
    let data = new FormData(form);
    
    questionFields.forEach(question => {
      let feedbackDisplay = question.querySelector('.feedback');
      let feedback = document.createElement('P');
      feedbackDisplay.appendChild(feedback);

      let userAnswer = data.get(question.id);
      let correctAnswer = answerKey[question.dataset.id];
      
      if (userAnswer === correctAnswer) {
        feedback.textContent = 'Correct!';
        feedbackDisplay.classList.add('correct');
      } else {
        let str = userAnswer === null ? "You didn't answer the question." : "Incorrect.";
        feedback.textContent = `${str} The correct answer is: "${correctAnswer}".`;
        feedbackDisplay.classList.add('incorrect');
      }
    });
  });

  form.addEventListener('reset', event => {
    questionFields.forEach(question => {
      let feedbackDisplay = question.querySelector('.feedback');
      feedbackDisplay.replaceChildren();
      feedbackDisplay.classList.remove('correct');
      feedbackDisplay.classList.remove('incorrect');
    });
  });
});