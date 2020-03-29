const EventEmitter = {
	events: {},
	dispatch: function(e, data) {
		if (!this.events[e]) return;
		this.events[e].forEach(cb => cb(data));
	},
	subscribe: function(e, cb) {
		if (!this.events[e]) this.events[e] = [];
		this.events[e].push(cb);
	}
};

export default EventEmitter;
