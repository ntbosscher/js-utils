
class timerWorker {
	constructor(milliseconds) {

		this.state = {
			p: null,
			milliseconds: milliseconds,
			canceled: false,
		};

		this.start();
	}

	start() {
		this.state.p = new Promise((resolve) => {
			setTimeout(() => {
				if(this.state.canceled){
					return;
				}
				resolve();
			}, this.state.milliseconds)
	   });
	}

	// alias for .done()
	Done(callback) {
		this.done(callback);
	}

	done(callback) {
		this.state.p.then(callback);
	}

	// alias for .done()
	then(callback) {
		this.done(callback);
	}

	cancel() {
		this.state.canceled = true;
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
