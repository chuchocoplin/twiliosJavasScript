class Ducktypium {

  constructor(color){
        if (color.toLowerCase() !== "red" && color.toLowerCase() !== "blue" && color.toLowerCase() !== "yellow"){
          throw Error("Please enter red blue or yellow");
        } else {
          this.color = color;
        }

        this.calibrationSequence = [];
    }




    refract(c) {
        if (c.toLowerCase() !== "red" && c.toLowerCase() !== "blue" && c.toLowerCase() !== "yellow"){
          throw Error("Please enter red blue or yellow");
        } else {
          if (c.toLowerCase() === this.color){
              return c;
          } else{
              if ((this.color.toLowerCase() === "red" && c.toLowerCase() === "blue") || (this.color.toLowerCase() === "blue" && c.toLowerCase() === "red")) {
                return "purple";
              } else if ((this.color.toLowerCase() === "red" && c.toLowerCase() === "yellow") || (this.color.toLowerCase() === "yellow" && c.toLowerCase() === "red")) {
                return "orange";
              } else if ((this.color.toLowerCase() === "blue" && c.toLowerCase() === "yellow") || (this.color.toLowerCase() === "yellow" && c.toLowerCase() === "blue")) {
                return "green";
              }
          }
        }
    }

    calibrate(arr) {
      arr.sort();
      arr.forEach((item) => {
        this.calibrationSequence.push(Number(item) * 3)
      });

    }

}





const dt = new Ducktypium('red');

console.log(dt.color); // prints 'red'

console.log(dt.refract('blue')); // prints 'purple'
console.log(dt.refract('red')); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]
