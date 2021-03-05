let input = process.argv[2];

if (Number(input) === 0) {
  console.log("alive")
} else if (Number(input) === 1) {
  console.log("flowering")
} else if (Number(input) === 2) {
  console.log("shedding")
} else {
  console.log("other")
}
