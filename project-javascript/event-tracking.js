// Initialize the Optimizely global variable
window.optimizely = window.optimizely || [];

// Set start time
let startTime = new Date();

const getTimeOnPage = () => {
  const endTime = new Date();
  return (endTime.getTime() - startTime.getTime()) / 1000;
};

const getScrollDepth = () => {
  // Amount scrolled from the top
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  // Height of the viewport
  const viewportHeight = window.innerHeight;

  // Total height of the document
  const documentHeight = document.documentElement.scrollHeight;

  // Calculate scroll depth as a percentage
  return ((scrollTop + viewportHeight) / documentHeight) * 100;
};

const sendEvent = (eventName, value) => {
  // Get current URL without query parameters, hash, or schema
  const URL = window.location.hostname + window.location.pathname;

  // Send event to Optimizely using value tag and URL property
  window.optimizely.push({
    type: 'event',
    eventName,
    tags: {
      value
    },
    properties: {
      URL
    }
  });
};

// Listen for the page being closed
window.addEventListener('pagehide', () => {
  // Send scroll_depth event to Optimizely
  sendEvent('scroll_depth', getScrollDepth());
  // Send time_on_page event to Optimizely
  sendEvent('time_on_page', getTimeOnPage());
});

// Listen for the page being opened again
window.addEventListener('pageshow', () => {
  // Reset start time
  startTime = new Date();
});
