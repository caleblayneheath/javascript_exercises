function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(({id}) => id === inventoryItem);
}

function isItemAvailable(inventoryItem, transactions) {
  // use transactionsFor to get all matching transactions
  // compute quantity by examing objects (in is add, out is subtract)
  // return true if quanity > 0
  let records = transactionsFor(inventoryItem, transactions);
  
  let quantity = records.map(({movement, quantity}) => {
    return (movement === 'in') ? quantity : -1 * quantity;
    }).reduce((sum, quantity) => sum += quantity)

  return quantity > 0;
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
