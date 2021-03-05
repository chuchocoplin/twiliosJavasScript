let inNum = process.argv[2];
let out = "";

if (Number(inNum) % 3 === 0){
  out += "Java";
}
if (Number(inNum) % 5 === 0){
  out += "Script";
}
if (!(Number(inNum) % 3 === 0 || Number(inNum) % 5 === 0)){
  out += inNum;
}

console.log(out);
