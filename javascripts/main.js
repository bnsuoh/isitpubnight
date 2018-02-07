/* Hello there, if you are looking at this code, have a great day!*/

var pubType = {
	REGULAR: 1,
	CLASSY: 2,
	SOPH: 3,
};
var pubDay;
var nextPubDay;

var pubdays =
[
	[new Date("2/8/18" ), pubType.REGULAR],
	[new Date("2/15/18" ), pubType.REGULAR],
	[new Date("2/22/18" ), pubType.CLASSY],
	[new Date("3/1/18" ), pubType.REGULAR],
	[new Date("3/8/18" ), pubType.REGULAR],
	[new Date("3/15/18" ), pubType.REGULAR],
	[new Date("3/29/18" ), pubType.CLASSY],
	[new Date("4/5/18" ), pubType.REGULAR],
	[new Date("4/12/18" ), pubType.REGULAR],
	[new Date("4/19/18" ), pubType.REGULAR],
	[new Date("4/26/18" ), pubType.CLASSY],
	[new Date("5/3/18" ), pubType.REGULAR],
	[new Date("5/10/18" ), pubType.REGULAR],
	[new Date("5/15/18" ), pubType.REGULAR],
	[new Date("5/24/18" ), pubType.CLASSY],
]

function isItPubNight(d)
{
	d.setHours(0, 0, 0, 0);
	for (var i = 0; i < pubdays.length; i++)
	{
		if (pubdays[i][0].getTime() == d.getTime())
		{
			pubDay = pubdays[i];
			return true;
		}
		if (pubdays[i][0].getTime() > d.getTime())
		{
			nextPubDay = pubdays[i];
			return false;
		}
	}
	return false;
}

var d = new Date();
if (isItPubNight(d))
{
	document.getElementById("demo").innerHTML = "YES!";
	var message = "It is ";
	if (pubDay[1] == pubType.CLASSY) message += "Classy ";
	else if (pubDay[1] == pubType.SOPH) message += "Sophomore ";
	message += "Pub Night!";
  document.getElementById("countdown").innerHTML = message;
}
else
{
	document.getElementById("demo").innerHTML = "NO";
	d = new Date();
	var distance = nextPubDay[0].getTime() - d.getTime();
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	document.getElementById("countdown").innerHTML =
		 (days > 0 ? (days + " day" + (days > 1 ? "s " : " ")): "") +
		 (hours > 0 ? (hours + " hour" + (hours > 1 ? "s " : " ")): "") +
		 (minutes > 0 ? (minutes + " minute" + (minutes > 1 ? "s " : " ")): "") +
		 "until ";
  if (nextPubDay[1] == pubType.CLASSY)
		document.getElementById("countdown").innerHTML += "Classy ";
  else if (nextPubDay[1] == pubType.SOPH)
		document.getElementById("countdown").innerHTML += "Sophomore ";
	document.getElementById("countdown").innerHTML += "Pub Night."
}
