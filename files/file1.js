//to enable prompts
const readline = require("readline");
const r1 =readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

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
    console.log(Grade)
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


r1.question("Enter student marks between 0 and 100",(Grade)=> {
    const finalGrade = studentMarks(parseInt(Grade));
    console.log(`your grade is:${finalGrade}`);
    r1.close();
});
  
