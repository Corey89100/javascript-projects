// Declare and assign the variables below
let spaceshuttle= "Determination";
let shuttlespeed= 17500;('mph');
let distancetomars= 225000000;
let Distancetothemoon= 384400;
let milesperkilometer= 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof spaceshuttle);
console.log(typeof shuttlespeed);
console.log(typeof distancetomars);
console.log(typeof Distancetothemoon);
console.log(typeof milesperkilometer);
// Calculate a space mission below
let milestomars= distancetomars * milesperkilometer;
let hourstomars= distancetomars / shuttlespeed;
let daystomars= hourstomars / 24;
// Print the results of the space mission calculations below
console.log(spaceshuttle + " will take " + daystomars + " days to reach mars.");
// Calculate a trip to the moon below
let milestomoon= Distancetothemoon * milesperkilometer;
let hourstomoon= Distancetothemoon / shuttlespeed;
let daystomoon= hourstomoon / 24;
// Print the results of the trip to the moon below
console.log(spaceshuttle + " will take " + daystomoon + "days to reach THY moon")