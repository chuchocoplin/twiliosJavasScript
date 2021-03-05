class Materializer {
  constructor(t) {
    this.target = t;
    this.activated = false;
  }

  activate() {
    this.activated = true;
  }
  materialize() {
    if (this.activated === true) {
      return this.target;
    }
  }
}
