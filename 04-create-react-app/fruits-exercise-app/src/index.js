import foods from "./foods";
import { choice, remove } from "./helpers";

let randomfruit = choice(foods);
console.log(`I'd like one${randomfruit} ,please`);

console.log(`Here you go:${randomfruit} `);
let remaining = remove(foods, randomfruit);
console.log(`Delicious! May I have another?`);
console.log(
  `I am sorry, we're all out.We have  ${remaining.length} other foods left.`
);
