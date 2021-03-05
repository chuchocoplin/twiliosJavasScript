function calculateMass(arr){
  let total = 0;

  arr.reduce(function(accumulator, item){
   total = accumulator + item.length;
   return total;
 }, 0);

  return total;
}



// there are other ways of writing functions more modern and shorter
//Javascript Functions & Parameters | Javascript Tutorial For Beginners - Dev Ed
//Programming with Mosh
