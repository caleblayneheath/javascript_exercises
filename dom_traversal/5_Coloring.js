function colorGeneration(n) {
  if (n < 1) return undefined;

  let currentGeneration = [...document.body.children];
  
  for (let i = 1; i < n; i += 1) {
    currentGeneration = currentGeneration
      .reduce(((arr, element) => arr.concat([...element.children])), []);
  }
  
  currentGeneration.forEach(element => element.classList.add('generation-color'));
}
