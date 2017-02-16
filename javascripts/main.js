function isItPubNight(day, hour, mins)
{
	if (day != 4) return false;
	if(hour < 17) return false;
	if (hour < 18)
   		if (mins< 30) return false;
	if (hour > 20) return false;
	if (hour > 19)
    	if (mins > 30) return false;
	return true;
}

function countdown(day, hour, mins)
{
  var pubday = 4; pubhour = 17; pubminute = 30;
  var diffday, diffhour, diffmin;
  diffday = pubday - day;
  diffhour = pubhour - hour;
  diffmins = pubminute - mins;
  if (diffmins < 0) { diffmins+=60; diffhour--;}
  if (diffhour < 0) { diffhour+=24; diffday--;}
  if (diffday < 0) { diffday+=7;}
  /*diffmins = (diffmins >= 0 ? diffmins : diffmins+60);
  diffhour = (diffhour >= 0 ? diffhour : diffhour+24);
  diffday = (diffday >= 0 ? diffday : diffday+7);*/
  document.getElementById("countdown").innerHTML = 
    diffday + " day(s), " +
    diffhour + " hour(s), " + 
    diffmins + " minute(s) until Pub Night.";
}

var d = new Date();
var day = d.getDay();
var hour = d.getHours();
var mins = d.getMinutes();

var isItPub = isItPubNight(day, hour, mins);
if (isItPub == true)
	 document.getElementById("demo").innerHTML = "YES!";
else
{
	document.getElementById("demo").innerHTML = "NO!";
	countdown(day, hour, mins);
}
