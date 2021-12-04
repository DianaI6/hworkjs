//დავალება 1
// let  user = {
//   firstname: 'giorgi',
//   lastname: 'smith',
//   age: 25,
//  studentstatus: 'active'
// };

// console.log(user.studentstatus);


//დავალება 2 (for)
//let names = ['a', 'ab', 'abc', 'abcd', 'abcde'];
// for(let x=0; x<names.length; x++) {
//     console.log(names[x]);
// } 
// ან მეორე ვარიანტი
// for (let z of names) {
//     console.log(z);
// }


//დავალება 2 (while)
// let y=0;
// while ( y<names.length) {
//     console.log(names[y]);
//     y++;
// }


//დავალება 3
// let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
// დაბეჭდოს 5-ზე მეტი
// for (let i=0; i<numbers.length;  i++) {
//     if (numbers [i] >5){
//         console.log(numbers[i]);
//     }
// }
// მეორე ვარიანტი
// for (let item of numbers) {
//     if (item >5) {
//         console.log(item);
//     }
// }


//დავალება  4
// let user = {
// 	name: 'giori',
// 	age:  20,
// 	studentstatus: 'active'
// }
// if (user.age >18 && user.studentstatus=='active') {
//      console.log ('hello');
// }else if(user.name=='giorgi'){
//     console.log('hello giorgi');
// }else if (user.studentstatus=='active' || user.age<25){
//     console.log('heloo world');
// }else {
//    console.log('error');
// }


//დავალება 5
let array = [watermelon, pear, 10, 45, 50, 'apple', 'ananas'];   
if (array=typeof string) {
    console.log (array);
}  
//რატომ არ გამოდის?? 


//დავალება 6
let users= [
    {username:'test1', status:false},
    {username:'test2', status:false},
    {username:'test3', status:true},
];
for (let y=0; y<users.length; y++) {
   if (users.status[y]==true) {
       console.log(users.username [y]);
   }
}
//ვერ გავაკეთე 