function scan(arr) {
  count = 0;
  arr.forEach(function(item){
    if( item.toLowerCase() === "contraband"){
      count++;
    }
  });
  return count;
}
