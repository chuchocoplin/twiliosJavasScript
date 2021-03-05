function getFirstAmountSorted(arr, num) {
  let sortedArr = arr.sort();
  return sortedArr.slice(0, num);
}
