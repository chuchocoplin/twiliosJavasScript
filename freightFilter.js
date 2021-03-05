function scanAndFilter(arr, str) {
  let filtered = []

  arr.filter(function(item){
    if (item.toLowerCase() !== str.toLowerCase()) {
      filtered.push(item);
    }
  });

  return filtered;
}



const cargo = ['apples', 'ray guns', 'oranges', 'tacos', 'ray guns'];

const filteredCargo = scanAndFilter(cargo, 'ray guns');

console.log(filteredCargo);
