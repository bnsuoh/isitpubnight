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
	[new Date("1/10/19" ), pubType.REGULAR],
	[new Date("1/15/19" ), pubType.REGULAR],
	[new Date("1/24/19" ), pubType.CLASSY],
	[new Date("2/7/19" ), pubType.REGULAR],
	[new Date("2/14/19" ), pubType.REGULAR],
	[new Date("2/21/19" ), pubType.REGULAR],
	[new Date("2/28/19" ), pubType.CLASSY],
	[new Date("3/7/19" ), pubType.REGULAR],
	[new Date("3/14/19" ), pubType.REGULAR],
	[new Date("3/28/19" ), pubType.CLASSY],
	[new Date("4/4/19" ), pubType.REGULAR],
	[new Date("4/11/19" ), pubType.REGULAR],
	[new Date("4/18/19" ), pubType.REGULAR],
	[new Date("4/25/19" ), pubType.CLASSY],
	[new Date("5/2/19" ), pubType.REGULAR],
	[new Date("5/9/19" ), pubType.REGULAR],
	[new Date("5/14/19" ), pubType.REGULAR],
	[new Date("5/23/19" ), pubType.CLASSY],

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
