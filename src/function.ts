export {};

// function bmi(height:number, weight:number):number{
//   return weight / (height * height);
// }

let bmi: (height: number, weight: number, printable?:boolean) => number = (height:number, weight:number, printable?:boolean):number =>{
  const bmi = weight / (height * height);
  if (printable){
    console.log({bmi});
  }
  return bmi;
};

// bmi(1.75, 86, true);

// const nextsalary = (current:number, rate:number = 1.1) => {
//   return current *rate;
// }

// console.log(nextsalary(3,5));

function double(value:number):number{
 return value*2;
}

console.log(double(200));


