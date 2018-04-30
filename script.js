
const fs = require('fs');
const file = fs.readFileSync('./SantaFile.txt');
// console.log(file[0])
//------------------------------------------------------------------------------------------
/*
open paren: 40
close paren: 41

Exercise1:
	floorReached = 2 * (# of chars * 40.5 - (# of ups * 40 + # of downs * 41))

Exercise2: (inside the 'for' loop)
	currFloorNum += 40.5 - currInstrVal
currInstrVal is 40 if up, 41 if down.
Code bails out of the loop after reaching the basement the first time

*/
//------------------------------------------------------------------------------------------
/*************************************** EXERCISE-1 ***************************************/

console.time('exercise_1_time');
let floorReached = 2*(file.length * 40.5 - (file.reduce((acc, obj) => acc + obj, 0)))
console.timeEnd('exercise_1_time');

console.log('The instructions take Santa to floor #:', floorReached);
console.log('\n');

//------------------------------------------------------------------------------------------
/*************************************** EXERCISE-2 ***************************************/
console.time('exercise_2_time');
var currFloorNum = 0;
for (i=0; currFloorNum > -0.1; i++) {
	currFloorNum += 40.5 - file[i];
}

console.timeEnd('exercise_2_time');
console.log('Santa got to the basement at instruction #:', i)

//the above code assumed that the instructions will take Santa to
//to the basement at some time during the instructions. If assumption is invalid
//then we need the following if/else statement

// if (i == file.length && currFloorNum > -0.1) {
// 	console.log('Basement never reached!')
// } else {
// 	console.log('Santa got to the basement at instruction #:', i)
// }


//------------------------------------------------------------------------------------------

