function speedDetector(speed){
    const speedLimit = 70;
    const aboveSpeed = 5;
    const finePoints = 1;

    if (speed < speedLimit) {
        console.log("Ok")
        return 0;}

        else {
            const excessDistance = speed - speedLimit;
            const demeritPoints = Math.floor(excessDistance/aboveSpeed);
            console.log("Points "+ demeritPoints);

            if (demeritPoints >= 12){
                console.log("License suspended");
            }
            return demeritPoints;
        }
        const speed = parseFloat(prompt("Enter speed in km/hr"));

        if(!isNaN(speed)) {
            speedDetector(speed);
        }
        else {console.log("Invalid Input!")}
}