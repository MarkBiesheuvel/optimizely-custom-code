// Store the original methods
const originalOpen = XMLHttpRequest.prototype.open;
const originalSend = XMLHttpRequest.prototype.send;

// Override the open method
XMLHttpRequest.prototype.open = function(_method, url, _async, _user, _password) {
  // Save the URL to the instance for later use
  this._requestedUrl = url;
  // Call the original open method
  originalOpen.apply(this, arguments);
};

// Override the send method to capture and modify the payload
XMLHttpRequest.prototype.send = function(body) {
  // Only modify requests to the Event API
  if (this._requestedUrl && this._requestedUrl.includes('logx.optimizely')) {
    try {
      // Parse the payload
      const payload = JSON.parse(body);

      // Modify the payload
      const containsDecisions = payload.visitors.some(visitor => visitor.snapshots.some(snapshot => snapshot.decisions.length > 0));

      // Do not send out payload and potentially save an MAU
      if (!containsDecisions) {
        console.info('Not sending request to Optimizely Event API since it does not contain any decisions.');
        return;
      }
    } catch (e) {
      console.warn('Error while analyzing Optimizely Event API request.', e);
    }
  }

  // Call the original send method with modified or original data
  originalSend.call(this, body);
};