export {};

// namespace aaa{
// export class Person {
//   constructor(public name: string){}
// }
// }

// const me = new aaa.Person('です');
// console.log(me.name);

class Animal {
 run():string {
   return 'I can run';
 }
}

let animal = new Animal();
console.log(animal.run());