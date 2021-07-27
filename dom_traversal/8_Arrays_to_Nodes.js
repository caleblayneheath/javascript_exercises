function arrayToNodes(nodes) {
  let parent = document.createElement(nodes[0]);
  let children = nodes[1];

  children.forEach(child => parent.appendChild(arrayToNodes(child)));
  
  return parent;
}
