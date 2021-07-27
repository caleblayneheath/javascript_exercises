let timer = (() => {
  const millisecondConversions = {
    'toCentiseconds': ms => Math.floor(ms / 10),
    'toSeconds': ms => Math.floor(ms / 1000),
    'toMinutes': ms => Math.floor(ms / 60000),
    'toHours': ms => Math.floor(ms / 3600000),
  };

  let step;
  let time;
  let interval;
  let output;

  let countUp = () => {
    time += step;
    updateOutput();
  };

  let displayFormat = (count, modulo) => {
    let string = String(count % modulo);
    if (string.length === 1) {
      string = '0' + string;
    }
    return string;
  };

  let updateOutput = () => {
    output['centiseconds'] = displayFormat(millisecondConversions['toCentiseconds'](time), 100);
    output['seconds'] = displayFormat(millisecondConversions['toSeconds'](time), 60);
    output['minutes'] = displayFormat(millisecondConversions['toMinutes'](time), 60);
    output['hours'] = displayFormat(millisecondConversions['toHours'](time), 100);
  };

  return {
    init() {
      this.reset();
      return this;
    },
    isRunning() {
      return !!interval;
    },
    start() {
      interval = setInterval(countUp, step);
    },
    stop() {
      clearInterval(interval);
      interval = null;
    },
    reset() {
      this.stop();
      step = 10;
      time = 0;
      output = {
        hours,
        minutes,
        seconds,
        centiseconds,
      };
    },
    hours() {
      return output['hours'];
    },
    minutes() {
      return output['minutes']
    },
    seconds() {
      return output['seconds']
    },
    centiseconds() {
      return output['centiseconds']
    },
  };
})();

document.addEventListener('DOMContentLoaded', event => {
  let watch = timer.init();
  let updateInterval;

  let hoursDisplay = document.querySelector('#hours');
  let minutesDisplay = document.querySelector('#minutes');
  let secondsDisplay = document.querySelector('#seconds');
  let centisecondsDisplay = document.querySelector('#centiseconds');

  let startStopButton = document.querySelector('#startstop');
  let resetButton = document.querySelector('#reset');

  let updateDisplay = () => {
    centisecondsDisplay.textContent = watch.centiseconds();
    secondsDisplay.textContent = watch.seconds();
    minutesDisplay.textContent = watch.minutes();        
    hoursDisplay.textContent = watch.hours();
  };

  startStopButton.addEventListener('mouseup', event => {
    if (watch.isRunning()) {
      watch.stop();
      clearInterval(updateInterval);
      startStopButton.textContent = 'Start';
    } else {
      watch.start();
      updateInterval = setInterval(updateDisplay, 10);
      startStopButton.textContent = 'Stop';
    }
  });

  resetButton.addEventListener('mouseup', event => {
    watch.reset();
    clearInterval(updateInterval);

    startStopButton.textContent = 'Start';
    
    centisecondsDisplay.textContent = '00';
    secondsDisplay.textContent = '00';
    minutesDisplay.textContent = '00';
    hoursDisplay.textContent = '00';
  });
});