// import { Deque } from "./index";
// const deque = new Deque();
// console.log(deque.isEmpty()); // outputs true
// deque.enqueue('John');
// deque.enqueue('Jack');
// console.log(deque.toString()); // John,Jack
// deque.enqueue('Camila');
// console.log(deque.toString()); // John,Jack,Camila
// console.log(deque.size()); // outputs 3
// console.log(deque.isEmpty()); // outputs false
// deque.dequeue(); // remove John
// console.log(deque.toString()); // Jack,Camila
// deque.dequeue(); // remove Jack
// console.log(deque.toString()); // Camila
// deque.enqueue('John');
// console.log(deque.toString()); // Camila,John
// //# sourceMappingURL=test.js.map

// import {hotPotato} from './hotPotato';
// const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
// const result = hotPotato(names, 7);
// result.elimitated.forEach(name => {
//     console.log(`${name} was eliminated from the Hot Potato game.`);
// });
// console.log(`The winner is: ${result.winner}`);


import { palindromeChecker } from './palindromeChecker';

const str = "kayak"
console.log(palindromeChecker(str));