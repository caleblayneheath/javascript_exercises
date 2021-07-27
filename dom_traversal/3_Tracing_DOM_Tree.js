function domTreeTracer(id) {
  let grandestParent = document.getElementById('1');
  let result = [];
  let currentElement = document.getElementById(id);
  do {
    let parent = currentElement.parentNode;
    result.push([...parent.children].map(({tagName}) => tagName));
    currentElement = parent;
  } while(currentElement !== grandestParent.parentNode);
  return result;
}
