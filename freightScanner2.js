function scan(arr) {
  indexez = [];
  arr.forEach(function(item, index){
    if( item.toLowerCase() === "contraband"){
      indexez.push(index);
    }
  });
  return indexez;
}

const indexes = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Contraband Indexes: ' + indexes);
