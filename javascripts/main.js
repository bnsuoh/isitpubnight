/* Hello there, if you are looking at this code, have a great day!*/

var pubday = 8; pubhour = 17; pubminute = 30;
var pubhourend = 19;

var pubdays = {}

function isItPubNight(day, hour, mins)
//function isItPubNight(date)
{
	if (day != pubday) return false;
	if (hour < pubhour) return false;
	if (hour < pubhour + 1)
     		if (mins < pubminute) return false;
	if (hour > pubhourend + 1) return false;
	if (hour >= pubhourend)
      	if (mins > pubminute) return false;
	return true;
  for (var i = 0; i <= pubdays.length - 1; i++) {
    pubdays[i]
  }
}

function countdown(day, hour, mins)
{
  var diffday, diffhour, diffmin;
  diffday = pubday - day;
  diffhour = pubhour - hour;
  diffmins = pubminute - mins;
  if (diffmins < 0) { diffmins+=60; diffhour--;}
  if (diffhour < 0) { diffhour+=24; diffday--;}
  if (diffday < 0) { diffday+=7;}

  document.getElementById("countdown").innerHTML = 
     diffday + " day(s), " +
     diffhour + " hour(s), " + 
     diffmins + " minute(s) until Pub Night.";
  document.getElementById("countdown").innerHTML = "It is not Pub Night."
}

var d = new Date();
var day = d.getDay();
var hour = d.getHours();
var mins = d.getMinutes();

var isItPub = isItPubNight(day, hour, mins);
if (isItPub == true)
{
	document.getElementById("demo").innerHTML = "YES!";
  document.getElementById("countdown").innerHTML = "It is Pub Night!";
}
else
{
	document.getElementById("demo").innerHTML = "NO!";
	countdown(day, hour, mins);
}
