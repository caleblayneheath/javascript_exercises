function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...callbacks) {
  let randomValue = upperLimit => Math.round(upperLimit * Math.random());
  
  let logCallbacks = (time) => {
    let times = [];
    
    while (times.length < callbacks.length) {
      let randomSecond = randomValue(time);
      if (!times.includes(randomSecond)) { 
        times.push(randomSecond);
      }
    }
    
    callbacks.forEach((func, index) => setTimeout(func, times[index] * 1000));
  };
  
  let logSeconds = (time) => {
    for (i = 1; i <= time; i += 1) {
      let sec = i;
      setTimeout(() => console.log(sec), sec * 1000);
    }
  };

  if (callbacks.length < 1) {
    return;
  }

  let time = callbacks.length * 2;
  logSeconds(time);
  logCallbacks(time);
}

randomizer(callback1, callback2, callback3);
