//variables containing tom's and jerry's height and mass
const tomHeightIn = 9;
const tomMassG = 8;
const jerryHeightIn = 10;
const jerryMassG = 45;

//variables containing tom's and jerry's height and mass in kg and meters
const tomHeightM = tomHeightIn * 0.0254;
const tomMassKg = tomMassG / 1000;
const jerryHeightM = jerryHeightIn * 0.0254;
const jerryMassKg = jerryMassG / 1000;

// varialbes that calculate the BMI of tom and jerry
const tomBMI = tomMassKg / tomHeightM ** 2;
const jerryBMI = jerryMassKg / jerryHeightM ** 2;

//variable that compares tomBMI and jerryBMI to see if tomBMI is higher
const isTomBMIHigher = tomBMI > jerryBMI;

console.log(isTomBMIHigher); //output: false
console.log(tomBMI); //output: 0.15308672592653827
console.log(jerryBMI); //output: 0.69750139500279
