var endTime = new Date(2016,4,29);

//HTML Elements
var timerBox = document.getElementById("countdown");
var daysBox = timerBox.getElementsByClassName("days")[0];
var hoursBox = timerBox.getElementsByClassName("hours")[0];
var minutesBox = timerBox.getElementsByClassName("minutes")[0];
var secondsBox = timerBox.getElementsByClassName("seconds")[0];

function updateTime () {
	var now = new Date();
	var seconds = (endTime - now)/1000;
	daysBox.textContent = Math.floor(seconds / 86400);
	seconds -= daysBox.textContent*86400;
	hoursBox.textContent = Math.floor(seconds / 3600);
	seconds -= hoursBox.textContent*3600;
	minutesBox.textContent = Math.floor(seconds/60);
	seconds -= minutesBox.textContent*60;
	secondsBox.textContent = Math.floor(seconds)
	setTimeout(updateTime,1000)
}