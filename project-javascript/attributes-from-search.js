// Initialize the Optimizely global variable
window.optimizely = window.optimizely || [];

// Parse query parameters
const search = new URLSearchParams(window.location.search);

// Set source and campaign attribute
window.optimizely.push({
  type: 'user',
  attributes: {
    pxl: search.get('pxl'), // source
    plid: search.get('plid') // campaign
  }
});