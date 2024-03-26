//SPEED DETECTOR CHALLENGE

function speedRules(){

let carSpeed = prompt("Car Speed:"); /*prompt the user to input car speed
//car speed limit 70km/h*/
let speedLimit = 70;
//extra speed per demerit point
let kmPerS = 5;
//calculate demerit points 
let demeritPoints = (carSpeed - speedLimit) / kmPerS;

if (carSpeed <= speedLimit) {
  alert("OK!");
} else if (demeritPoints > 12) {
  alert("License suspended");
} else {
  alert("Points :" + demeritPoints);
}
}
