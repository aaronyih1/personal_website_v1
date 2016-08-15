var msec = Date.parse("March 21, 2012");
console.log("hello");
window.setInterval(upTime, 1000);

function upTime() {
	msec+=1000;
	console.log(msec);
	var d = new Date(msec);
	document.getElementById("insert_date").innerHTML = d;