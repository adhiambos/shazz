//to enable prompts
const readline = require("readline");
const r1 =readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

//SPEED DETECTOR

function speedDetector(speed){

    const speedLimit = 70;

    const kmPerS = 5;

    const aboveSpeed = speed -speedLimit

    const demeritPoints = aboveSpeed/kmPerS

    if (aboveSpeed<0) {
  alert("OK!");
} 
    else if (demeritPoints > 12) {
  alert("License suspended");
} 
return demeritPoints + " demerit(s)"

}

r1.question("Enter car speed(km/h)",(speed)=> {
    const dPoints = speedDetector(parseInt(speed));
    console.log(`your demerit points:${dPoints}`);
    r1.close();
});










