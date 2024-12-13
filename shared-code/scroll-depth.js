const eventName = 'exp_123_scroll_depth';

window.addEventListener('pagehide', () => {
  // Amount scrolled from the top
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  // Height of the viewport
  const viewportHeight = window.innerHeight;

  // Total height of the document
  const documentHeight = document.documentElement.scrollHeight; 

  // Calculate scroll depth as a percentage
  const scrollDepth = ((scrollTop + viewportHeight) / documentHeight) * 100;

  // Send event to Optimizely
  window.optimizely.push({
    type: 'event',
    eventName,
    tags: {
      value: scrollDepth
    }
  });
});