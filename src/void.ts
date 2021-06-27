export {};
function returnNO():void {
  console.log("i dont return");
}

// console.log(returnNO());

// let absence:null = null;

// function error(message:string):never{
//  throw new Error(message);
// }

// try{
// let result = error('test');
// console.log('jljaltja');


// }catch( error ){
// console.log({error});
// }
const kansu = ():number =>43;
let number:any = kansu();
let numberunknown:unknown =kansu();

let subany = number + 10;
// console.log(typeof numberunknown);
// if(typeof numberunknown === 'number'){

  // let subun = numberunknown + 10;
  console.log(subany);

