let input1 = process.argv[2].toLowerCase();
let input2 = process.argv[3].toLowerCase();

if (input1 < input2) {
  console.log("-1");
} else if (input1 == input2) {
  console.log("0");
} else {
  console.log("1");
}
