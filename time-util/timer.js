
class timerWorker {
	constructor(milliseconds) {
		this.p = null;
		this.milliseconds = milliseconds;
		this.start();
	}

	start() {
		this.p = new Promise((resolve) => {
		   setTimeout(() => {
			   resolve();
		   }, this.milliseconds)
	   });
	}

	Done(callback) {
		this.p.then(callback);
	}
}

var milliseconds = function(ms) {
	return new timerWorker(ms);
}

var seconds = function(sec) {
	return new timerWorker(sec * 1000);
}

var Timer = {
	seconds: seconds,
	milliseconds: milliseconds,
};

export default Timer
