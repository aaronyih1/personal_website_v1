var msec = Date.parse("Auguest 12, 2016 19:32:24");
console.log("hello");
window.setInterval(upTime, 1000);

function upTime() {
	msec+=1000;
	var d = new Date(msec);
	document.getElementById("insert_date").innerHTML = d;
}