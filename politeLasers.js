function getLaserSetting(glen) {
  if (glen === "please") {
    return "OFF"
  } else {
  return "ON"
  }
}

view = getLaserSetting(process.argv[2]);
console.log(view);
