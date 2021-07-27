function walk(node, callback) {
  callback(node);
  node.childNodes.forEach(child => walk(child, callback));
}

// to get number of direct childNodes
  // get length of childNodes property

function childNodes(id) {
  let node = document.getElementById(id);
  let count = 0;
  let indirectCount = () => count += 1;;
  walk(node, indirectCount);
  count = count - node.childNodes.length - 1;

  return [node.childNodes.length, count];
}

for (let i = 1; i <= 10; i+=1) {
  console.log(childNodes(i));
}
