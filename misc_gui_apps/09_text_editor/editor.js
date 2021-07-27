document.addEventListener('DOMContentLoaded', () => {
  let toolbar = document.querySelector('#toolbar');

  toolbar.addEventListener('mouseup', event => {
    if (event.target.tagName !== 'BUTTON') {
      return;
    }
    
    let commandName = event.target.dataset.command;
    let argument = null;

    if (commandName === 'createLink') {
      argument = window.prompt('Enter a URL for the link: ');
    }    
    document.execCommand(commandName, true, argument);
    
    argument = null;
  });
});