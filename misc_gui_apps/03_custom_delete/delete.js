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
  let actions = document.querySelector('#actions');
  let todoTemplate = Handlebars.compile(document.querySelector('#todo_template').innerHTML);
  let activeTodoId;

  todo_items.forEach(todo => {
    todos.insertAdjacentHTML('beforeend', todoTemplate(todo));
  });

  todos.addEventListener('mouseup', event => {
    if (!event.target.classList.contains('remove')) {
      return;
    }
    
    activeTodoId = event.target.closest('li').dataset.id;
    modalContainer.classList.remove('hidden');
  });

  modalContainer.addEventListener('mouseup', event => {
    if (event.target === modalContainer) {
      modalContainer.classList.add('hidden');
    }
  });

  actions.addEventListener('mouseup', event => {
    event.preventDefault();
    if (event.target.tagName !== 'A') {
      return;
    }

    let confirm = event.target.dataset.confirm;
    if (confirm === 'true') {
      let todo = document.querySelector(`[data-id="${activeTodoId}"]`);
      todo.parentNode.removeChild(todo);
    }

    modalContainer.classList.add('hidden');
  });
});