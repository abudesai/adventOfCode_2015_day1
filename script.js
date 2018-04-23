
const fs = require('fs');
//------------------------------------------------------------------------------------------
/*
open paren: 40
close paren: 41
num_floors = 2 * (# of chars * 40.5 - (# of ups * 40 + # of downs * 41))
*/

//------------------------------------------------------------------------------------------
const file = fs.readFileSync('./SantaFile.txt');
console.time('my_timer');
let floorNum = 2 * (file.length * 40.5 - (file.reduce((acc, obj) => acc + obj, 0)))
console.timeEnd('my_timer');
console.log('Floor #:', floorNum);

//------------------------------------------------------------------------------------------

// fs.readFile('./SantaFile.txt', (err, file) => {
// 	if (err) throw err;

// 	console.time('my_timer2');
// 	let floorNum = 2 * (file.length * 40.5 - (file.reduce((acc, obj) => acc + obj, 0)))
// 	console.timeEnd('my_timer2');

// 	console.log('Floor #:', floorNum);
// })