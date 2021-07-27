function buyFruit(list) {
  let result = [];
  list.forEach(item => {
    for (let index = 0; index < item[1]; index += 1) {
      result.push(item[0]);
    }
  });

  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
