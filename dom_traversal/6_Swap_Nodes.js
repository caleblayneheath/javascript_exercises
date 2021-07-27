function nodeSwap(id1, id2) {
  let validSwap = (elem1, elem2) => {
    return elem1 && elem2 && elem1.parentNode === elem2.parentNode;
  };
  
  let elem1 = document.getElementById(id1);
  let elem2 = document.getElementById(id2);

  if (validSwap(elem1, elem2)) {
    let parent = elem1.parentNode;
    let nodes = [...parent.childNodes];

    let idx1 = nodes.indexOf(elem1);
    let idx2 = nodes.indexOf(elem2);

    [nodes[idx1], nodes[idx2]] = [nodes[idx2], nodes[idx1]];
    parent.replaceChildren(...nodes);

    return true;
  }
}
