var clicked = false;
function timeCount(){
	var timeRemaining = document.getElementsByClassName("timeRemaining")[0].innerHTML;
	var repeatAll = document.getElementsByClassName("repeatButton")[0].getAttribute("aria-checked");
	if(timeRemaining == "0:01" && repeatAll == "false" && !clicked){
		document.getElementsByClassName("previousButton")[0].click();
		clicked = true;
	}
	else if(timeRemaining != "0:01")
		clicked = false;
}
setInterval(timeCount,1000);