const readline = require('readline');

function myNetSalary() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter your monthly Basic Salary: ", (basicSalaryInput) => {
        const basicSalary = parseFloat(basicSalaryInput);

        rl.question("Enter your monthly total Benefits: ", (benefitsInput) => {
            const benefits = parseFloat(benefitsInput);
            rl.close();

            // calculating gross salary
            const grossSalary = basicSalary + benefits;
            console.log("Gross Salary: ", grossSalary);

            // calculating payee
            let payee;
            if (grossSalary <= 24000) {
                payee = grossSalary * 0.01;
            } else if (grossSalary >= 24001 && grossSalary <= 32333) {
                payee = grossSalary * 0.25;
            } else {
                payee = grossSalary * 0.3;
            }
            console.log("Payee: ", payee);

            // calculating nhif deduction
            let nhif;
            if (grossSalary <= 5999) {
                nhif = 150;
            } else if (grossSalary >= 6000 && grossSalary <= 7999) {
                nhif = 300;
            } else if (grossSalary >= 8000 && grossSalary <= 11999) {
                nhif = 400;
            } else if (grossSalary >= 12000 && grossSalary <= 14999) {
                nhif = 500;
            } // add more conditions as needed
            console.log("NHIF Deduction: ", nhif);

            // calculating nssf deduction
            let nssf;
            if (grossSalary <= 6000) {
                nssf = grossSalary * 0.06; //6% deduction on gross salary
            } else if (grossSalary > 6000 && grossSalary <= 18000) {
                nssf = grossSalary * 0.06;
            } else {
                nssf = 18000 * 0.06; //6% deduction on the maximum contribution limit
            }
            console.log("NSSF Deduction: ", nssf);

            // calculating net salary
            const netSalary = grossSalary - (payee + nhif + nssf);
            console.log("Net Salary: ", netSalary.toFixed(2));
        });
    });
}

myNetSalary();
