var video = document.getElementById('video');
var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

var tracker = new tracking.ObjectTracker('eye');
tracker.setInitialScale(1);
tracker.setStepSize(1.7);
tracker.setEdgesDensity(0.01);

tracking.track('#video', tracker);

tracker.on('track', function(event) {
	c.clearRect(0, 0, canvas.width, canvas.height);
	// c.fillText('testing', canvas.width/2, canvas.height/2);
	// if (event.data.length > 0) console.log(event);
	event.data.forEach(function(rect) {
		// console.log(rect.x, rect.y, rect.width, rect.height);
		c.strokeStyle = "#a64ceb";
		c.strokeRect(rect.x, rect.y, rect.width, rect.height);
		c.font = "11px Helvetica";
		c.fillStyle = "#fff";
		c.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
		c.fillText('y: ' + rect.y + 'px', rect.y + rect.height + 5, rect.y + 22);
	});
});
