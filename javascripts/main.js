/* Hello there, if you are looking at this code, have a great day!*/

var pubType = {
	REGULAR: 1,
	CLASSY: 2,
	SOPH: 3,
	VIRTUAL: 4,
};
var pubDay;
var nextPubDay;

var pubdays =
	[
		[new Date("2/25/21"), pubType.VIRTUAL],
		[new Date("3/04/21"), pubType.VIRTUAL],
		[new Date("3/11/21"), pubType.VIRTUAL],
		[new Date("3/18/21"), pubType.VIRTUAL],
		[new Date("3/25/21"), pubType.VIRTUAL],
		[new Date("4/1/21"), pubType.VIRTUAL],
		[new Date("4/8/21"), pubType.VIRTUAL],
		[new Date("4/15/21"), pubType.VIRTUAL],
		[new Date("4/22/21"), pubType.VIRTUAL],
		[new Date("4/29/21"), pubType.VIRTUAL],
		[new Date("5/6/21"), pubType.VIRTUAL],
		[new Date("5/13/21"), pubType.CLASSY],
		[new Date("9/2/21"), pubType.REGULAR],
		[new Date("9/9/21"), pubType.REGULAR],
		[new Date("9/16/21"), pubType.REGULAR],
		[new Date("9/23/21"), pubType.REGULAR],
		[new Date("9/30/21"), pubType.CLASSY],
		[new Date("10/7/21"), pubType.REGULAR],
		[new Date("10/14/21"), pubType.REGULAR],
		[new Date("10/21/21"), pubType.REGULAR],
		[new Date("10/28/21"), pubType.CLASSY],
		[new Date("11/4/21"), pubType.REGULAR],
		[new Date("11/11/21"), pubType.REGULAR],
		[new Date("11/18/21"), pubType.REGULAR],

	]

function isItPubNight(d) {
	d.setHours(0, 0, 0, 0);
	for (var i = 0; i < pubdays.length; i++) {
		if (pubdays[i][0].getTime() == d.getTime()) {
			pubDay = pubdays[i];
			return true;
		}
		if (pubdays[i][0].getTime() > d.getTime()) {
			nextPubDay = pubdays[i];
			return false;
		}
	}
	return false;
}

var d = new Date();
if (isItPubNight(d)) {
	document.getElementById("demo").innerHTML = "YES!";
	var message = "It is ";
	if (pubDay[1] == pubType.CLASSY) message += "Classy ";
	else if (pubDay[1] == pubType.SOPH) message += "Sophomore ";
        else if (pubDay[1] == pubType.VIRTUAL) message += "Virtual ";
	message += "Pub Night!";
	document.getElementById("countdown").innerHTML = message;
}
else {
	document.getElementById("demo").innerHTML = "NO";
	d = new Date();
	var distance = nextPubDay[0].getTime() - d.getTime();
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	document.getElementById("countdown").innerHTML =
		(days > 0 ? (days + " day" + (days > 1 ? "s " : " ")) : "") +
		(hours > 0 ? (hours + " hour" + (hours > 1 ? "s " : " ")) : "") +
		(minutes > 0 ? (minutes + " minute" + (minutes > 1 ? "s " : " ")) : "") +
		"until ";
	if (nextPubDay[1] == pubType.CLASSY)
		document.getElementById("countdown").innerHTML += "Classy ";
	else if (nextPubDay[1] == pubType.SOPH)
		document.getElementById("countdown").innerHTML += "Sophomore ";
	document.getElementById("countdown").innerHTML += "Pub Night."
}
