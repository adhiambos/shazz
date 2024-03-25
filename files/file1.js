function studentMarks (Grade){
    if(Grade>79){
        return "A";
    }
    else if (Grade>=60){
        return "B";
    }
    else if (Grade>=49){
        return "C";
    }
    else if (Grade>=40){
        return "D";
    }
    else if (Grade<40){
        return "E";
    }
}
function myMarks() {
    let input = prompt("Enter mark (0-100):");
    let mark = parseFloat(input)
    if (Grade>=0 && Grade<=100){
        let Grade = StudentMarks(Grade);
        console.log("The student's grade is" + Grade);
    }
    else{
        console.log("Wrong Input")
    }

}
myMarks();