export {};

// namespace aaa{
// export class Person {
//   constructor(public name: string){}
// }
// }

// const me = new aaa.Person('です');
// console.log(me.name);

// class Animal {
//  run():string {
//    return 'I can run';
//  }
// }

// let animal = new Animal();
// console.log(animal.run());

//genericsについて
// const echo = <T> (arg:T):T =>{
// return arg;
// };

// console.log(echo<number>(100));
// console.log(echo<string>('helo'));

// console.log(echo<boolean>(true))



//型アサーション
let name:any = "amane";
let length = (name as string).length;
console.log(length);