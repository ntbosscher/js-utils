/*
* @Author: Nathan Bosscher
* @Date:   2017-10-02 07:40:41
* @Last Modified by:   Nathan Bosscher
* @Last Modified time: 2017-10-02 07:48:22
*/

class CancelableInterval {
	constructor(fx, intervalMs) {
		
		this.state = {
			fx: fx,
			ms: intervalMs,
			interval: 0,
			done: false,
		};

		this.pump = this.pump.bind(this);
		this.cancel = this.cancel.bind(this);

		this.state.interval = setInterval(this.pump, intervalMs);
	}

	pump() {
		if(this.state.done){
			console.error("invalid state");
			return;
		}

		this.state.fx(this.cancel)
	}

	cancel() {
		clearInterval(this.state.interval);
		this.state.done = true;
	}
}

export default CancelableInterval;