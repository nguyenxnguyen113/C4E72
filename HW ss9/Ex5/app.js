function rand(a,b) {
    return Math.floor(Math.random() * b) + a; 
}
const x = rand(4,16);
if (x<4) {
    console.log("Failed: the number is smaller than 4");
} else if(x>16) {
    console.log("Failed: the number is bigger than 16");
} else {
    console.log("passed, bravo");
}