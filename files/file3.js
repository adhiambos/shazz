
// Net Salary Calculator
function netSalary(){}

//basic salary and benefits used as variables for tax calculation
const basicSalaryInput = document.getElementById("basicSalary");
  const benefitsInput = document.getElementById("benefits");

  const basicSalary = basicSalaryInput.value === "" ? 0 : parseFloat(basicSalaryInput.value);
  const benefits = benefitsInput.value === "" ? 0 : parseFloat(benefitsInput.value);

  //PAYE Calculation
  function calculatePayee(basicSalary, benefits) {
      let grossSalary = basicSalary + benefits;

      let paye = 0;

      if (grossSalary <= 24000) {
        paye = (10 / 100) * grossSalary;
      } else if (grossSalary > 24000 && grossSalary <= 32333) {
        paye = (25 / 100) * grossSalary;
      } else if (grossSalary > 32333 && grossSalary <= 500000) {
        paye = (30 / 100) * grossSalary;
      } else if (grossSalary > 500000 && grossSalary <= 800000) {
        paye = (32.5 / 100) * grossSalary;
      } else {
        paye = (35 / 100) * grossSalary;
      }

      return paye;
    }

    //NHIF deduction
    function calculateNhifDeductions(basicSalary, benefits) {

    
    let nhifDeductions = 0;
  
  if (grossSalary >= 100000) {
    nhifDeductions = 1700;
  } else if (grossSalary >= 90000 && grossSalary <= 99999) {
    nhifDeductions = 1600;
  } else if (grossSalary >= 80000 && grossSalary <= 89999) {
    nhifDeductions = 1500;
  } else if (grossSalary >= 70000 && grossSalary <= 79999) {
    nhifDeductions = 1400;
  } else if (grossSalary >= 60000 && grossSalary <= 69999) {
    nhifDeductions = 1300;
  } else if (grossSalary >= 50000 && grossSalary <= 59999) {
    nhifDeductions = 1200;
  } else if (grossSalary >= 45000 && grossSalary <= 49999) {
    nhifDeductions = 1100;
  } else if (grossSalary >= 40000 && grossSalary <= 44999) {
    nhifDeductions = 1000;
  } else if (grossSalary >= 35000 && grossSalary <= 39999) {
    nhifDeductions = 950;
  } else if (grossSalary >= 30000 && grossSalary <= 34999) {
    nhifDeductions = 900;
  } else if (grossSalary >= 25000 && grossSalary <= 29999) {
    nhifDeductions = 850;
  } else if (grossSalary >= 20000 && grossSalary <= 24999) {
    nhifDeductions = 750;
  } else if (grossSalary >= 15000 && grossSalary <= 19999) {
    nhifDeductions = 600;
  } else if (grossSalary >= 12000 && grossSalary <= 14999) {
    nhifDeductions = 500;
  } else if (grossSalary >= 8000 && grossSalary <= 11999) {
    nhifDeductions = 400;
  } else if (grossSalary >= 6000 && grossSalary <= 7999) {
    nhifDeductions = 300;
  } else if (grossSalary >= 0 && grossSalary <= 5999) {
    nhifDeductions = 150;
  }
        return nhif;}

        //NSSF deduction
        function calculateNssfDeductions(basicSalary, benefits) {

      let grossSalary = basicSalary + benefits;
      let nssf = (6 / 100) * grossSalary;

      return nssf;
    }

    //Net Salary
    function calculateNetSalary(basicSalary, benefits) {

      let grossSalary = basicSalary + benefits;
      let paye = calculatePayee(basicSalary, benefits);
      let nhif = calculateNhifDeductions(basicSalary, benefits);
      let nssf = calculateNssfDeductions(basicSalary, benefits);

      let netSalary = grossSalary - (paye + nhif + nssf);

      return {grossSalary, netSalary, paye, nhif, nssf};
    }

    console.log(calculateNetSalary(basicSalary, benefits));