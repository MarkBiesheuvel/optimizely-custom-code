// Initialize the Optimizely global variable
window.optimizely = window.optimizely || [];

// Set hostname attribute
window.optimizely.push({
  type: 'user',
  attributes: {
    hostname: window.location.hostname
  }
});