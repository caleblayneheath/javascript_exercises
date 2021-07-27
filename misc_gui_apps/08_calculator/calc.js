const Symbols = ["CE", "C", "NEG", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "%", "="];
const Operators = ['+', '-', '*', '/', '%'];
const Operations = {
  '+': (firstTerm, secondTerm) => firstTerm + secondTerm,
  '-': (firstTerm, secondTerm) => firstTerm - secondTerm,
  '*': (firstTerm, secondTerm) => firstTerm * secondTerm,
  '/': (firstTerm, secondTerm) => firstTerm / secondTerm,
  '%': (firstTerm, secondTerm) => firstTerm % secondTerm,
};

let calculator = (() => {
  let isNumberChar = char => /[0-9.]/.test(char);
  let isOperator = char => Operators.includes(char);

  let expression = [];
  let entry = '0';
  let result = null;
  let currentOperation = null;

  let appendToEntry = char => {
    if (entry === result) {
      clearEntry();
    }

    if (char === '.') {
      if (!entry.match(/[.]/)) {
        entry += char;
      }
    } else if (entry === '0') {
      entry = char;
    } else {
      entry += char;
    }
  };

  let negateEntry = () => {
    let number = parseFloat(entry);
    if (number !== 0) {
      entry = String(number * -1);
    }
  };

  let clearEntry = () => entry = '0';

  let clearExpression = () => expression = [];

  let clearResult = () => result = null;
  
  let clearCurrentOperation = () => currentOperation = null;

  let clear = () => {
    clearEntry();
    clearExpression();
    clearResult();
    clearCurrentOperation();
  };

  let enterOperator = operator => {
    expression.push(entry, operator);

    if (currentOperation) {
      evaluate();
    }

    currentOperation = Operations[operator];
    result = entry;
  };

  let evaluate = () => {
    let mitigateFloatError = (firstTerm, secondTerm, func) => {
      let highestPower = Math.max(...[firstTerm, secondTerm].map(string => {
        return (string.split('.')[1] || '').length;
      }));

      let multipler = 10 ** highestPower;
      firstTerm = parseFloat(firstTerm) * multipler;
      secondTerm = parseFloat(secondTerm) * multipler;
      return (func(firstTerm, secondTerm) / multipler);
    };
    
    if (currentOperation) {
      entry = String(mitigateFloatError(result, entry, currentOperation));
      clearCurrentOperation();
    }
  };

  return {
    result() {
      return result;
    },
    expression() {
      return expression.join(' ');
    },
    entry() {
      return entry;
    },
    parseInput(string) {
      if (isNumberChar(string)) {
        appendToEntry(string);
      } else if (isOperator(string)) {
        enterOperator(string);
      } else {
        switch (string) {
          case 'CE':
            clearEntry();
            break;
          case 'C':
            clear();
            break;
          case 'NEG':
            negateEntry();
            break;
          case '=':
            evaluate();
            clearExpression();
            clearResult();
            break;
        }
      }
    },
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  let keypad = document.querySelector('#keypad');
  let expressionDisplay = document.querySelector('#expression');
  let entryDisplay = document.querySelector('#entry');

  let populateKeypad = () => {
    let html = '';
    Symbols.forEach(symbol => html += `<a>${symbol}</a>`);
    keypad.insertAdjacentHTML('afterbegin', html);
  };

  let updateDisplay = () => {
    expressionDisplay.textContent = calculator.expression();
    entryDisplay.textContent = calculator.entry();
  };

  populateKeypad();
  updateDisplay();

  keypad.addEventListener('mouseup', event => {
    event.preventDefault();
    if (event.target.tagName !== 'A') {
      return;
    }

    calculator.parseInput(event.target.textContent);
    updateDisplay();
  });
});


