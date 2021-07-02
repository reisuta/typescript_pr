export {};

// class Person{
//   public n:string;
//   private a:number;
//   constructor(name:string, age:number){
//     this.n = name;
//     this.a= age;
//   }
//   profile():string{
//     return `name:${this.n}age:${this.a}`;
//   }
// }

// let taro = new Person('taro',23);

// console.log(taro.n);
// console.log(taro.profile());


class me {
  static isProgrammer: boolean = true;
  static firstname: string = 'tarou';
  static lastname: string = 'satou';

  work(){
    return `hey guys! ${me.firstname}`;
  }
}

let my = new me();
console.log(my);
console.log(me);
console.log(my.work());