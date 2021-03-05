function mutate(arr){
  let mutated = [];

  arr.map(function(item){
    mutated.push(item.toUpperCase());
  })
  return mutated
}
