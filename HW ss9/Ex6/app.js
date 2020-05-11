function getDistance(xA, yA, xB, yB) { 
	let xDiff = xA - xB; 
	let yDiff = yA - yB;

	return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}
const d = getDistance(3,10,0,6)
if (d!==5) {
    console.log("Failed: the calculation is wrong")
} else {
    console.log("Passed, bravo")
}