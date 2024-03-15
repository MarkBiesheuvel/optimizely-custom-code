// Initialize the Optimizely global variable
window.optimizely = window.optimizely || [];

// Match for a single cookie value
const matches = document.cookie.match(/_sp_id\.134c\s*=\s*(.*?)\s*(;|$)/);
if (matches) {
  // Set cookie value as custom attribute
  window.optimizely.push({
    type: 'user',
    attributes: {
      sp_id: matches[1]
    }
  });
}