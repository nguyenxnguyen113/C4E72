function rand() {
    return Math.floor(Math.random() * 11);  
}
const x = rand();
if (x<0) {
    console.log("Failed: the number is smaller than 0");
} else if(x>10) {
    console.log("Failed: the number is bigger than 0");
} else {
    console.log("passed, bravo");
}