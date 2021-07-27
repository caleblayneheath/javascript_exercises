todo_items = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shopping' },
  { id: 3, title: 'Calling Mom' },
  { id: 4, title: 'Coffee with John '}
];

document.addEventListener('DOMContentLoaded', () => {
  let modalContainer = document.querySelector('#modal-container');
  let modal = document.querySelector('#modal');
  let todos = document.querySelector('#todos');
  let contextMenu = document.querySelector('#context-menu');
  let deleteButton = document.querySelector('[data-action="delete"]');
  let actions = document.querySelector('#actions');
  
  let todoTemplate = Handlebars.compile(document.querySelector('#todo_template').innerHTML);
  let activeTodoId;

  let showContextMenu = () => {
    contextMenu.classList.remove('hidden');
    contextMenu.style.left = event.x + 'px';
    contextMenu.style.top = event.y + 'px';  
  };
  let hideContextMenu = () => contextMenu.classList.add('hidden');
  let showModal = () => modalContainer.classList.remove('hidden');
  let hideModal = () => modalContainer.classList.add('hidden');

  todo_items.forEach(todo => {
    todos.insertAdjacentHTML('beforeend', todoTemplate(todo));
  });

  document.body.addEventListener('click', event => {
    hideContextMenu();
  });

  todos.addEventListener('contextmenu', event => {
    if (!(event.target.tagName === 'LI')) {
      return;
    }

    event.preventDefault();
    activeTodoId = event.target.dataset.id;
    showContextMenu()
  });

  deleteButton.addEventListener('mouseup', event => {
    event.preventDefault();
    showModal();
  });

  modalContainer.addEventListener('mouseup', event => {
    if (event.target === modalContainer) {
      hideModal();
    }
  });

  actions.addEventListener('mouseup', event => {
    event.preventDefault();
    if (event.target.tagName !== 'A') {
      return;
    }

    if (event.target.dataset.confirm) {
      let todo = document.querySelector(`[data-id="${activeTodoId}"]`);
      todo.parentNode.removeChild(todo);
    }
    hideModal();
  });
});