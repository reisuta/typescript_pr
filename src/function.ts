export {};

// function bmi(height:number, weight:number):number{
//   return weight / (height * height);
// }

// let bmi: (height: number, weight: number, printable?:boolean) => number = (height:number, weight:number, printable?:boolean):number =>{
//   const bmi = weight / (height * height);
//   if (printable){
//     console.log({bmi});
//   }
//   return bmi;
// };

// bmi(1.75, 86, true);

// const nextsalary = (current:number, rate:number = 1.1) => {
//   return current *rate;
// }

// console.log(nextsalary(3,5));


class Person{
  n:string;
  a:number;
  constructor(name:string, age:number){
    this.n = name;
    this.a= age;
  }
  profile():string{
    return `name:${this.n}age:${this.a}`;
  }
}

let taro = new Person('taro',23);

console.log(taro.profile());