function nodesToArr(node = document.body) {
  return [node.tagName, [...node.children].map(nodesToArr)];
}
