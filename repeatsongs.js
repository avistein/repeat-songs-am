function timeCount(){
	var timeRemaining = document.getElementsByClassName("timeRemaining")[0].innerHTML;
	var repeatAll = document.getElementsByClassName("repeatButton")[0].getAttribute("aria-checked");
		if(timeRemaining == "0:01" && repeatAll == "false"){
		document.getElementsByClassName("previousButton")[0].click();
	}
}
setInterval(timeCount,1000);