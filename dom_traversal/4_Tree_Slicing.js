function sliceTree(ancestorId, descendantId) {
  let ancestor = document.getElementById(ancestorId);
  let descendant = document.getElementById(descendantId);

  if((!ancestor || !descendant) ||
    (!ancestor.contains(descendant)) ||
    (!document.body.contains(ancestor))) { 
      return undefined; 
  };

  let result = [];
  let currentElement = descendant;

  do {
    result.unshift(currentElement.tagName);
    currentElement = currentElement.parentNode;
  } while (currentElement !== ancestor.parentNode);
 
  return result;
}
