// https://digitalskills.instructure.com/courses/3775/pages/activity-snake-names-6-dot-2-1?module_item_id=464450

const snakeNames = require('snake-names');

let namePicked = snakeNames.random();

console.log('You should name this snake: ', namePicked);

// in console, run command "node index.js" to see results

let femaleSnakeNames = snakeNames.female;
let randomIndex = Math.floor(Math.random() * femaleSnakeNames.length);
console.log("A great female snake name is: ", femaleSnakeNames[randomIndex]);
