var msec = new Date.parse("August 12th, 2016, 19:32:24");
var temp= msec.getTime();
window.setInterval(upTime, 1000);

function upTime() {
	temp+=1000;
	var d = new Date(temp);
	document.getElementById("insert_date").innerHTML = d;
}