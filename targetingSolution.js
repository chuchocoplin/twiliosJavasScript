class TargetingSolution {
  constructor(obj){
    this.x = obj.x;
    this.y = obj.y;
    this.z = obj.z;
  }

  target() {
    return "(" + this.x + ", " + this.y + ", " + this.z + ")";
  }

}





const m = new TargetingSolution({
  x: 10,
  y: 15,
  z: 900
});

console.log(m.target()); // would print "(10, 15, 900)"
