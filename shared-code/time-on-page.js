// NOTE: This implementation does not consider whether the page is in an active tab of the browser.
// If you want to exclude time where the current tab is not active you can use the visibilitychange event to pause the timer.

// TODO: Replace the value below with a unique event key for this experiment.
// For example, 'checkout_time_on_page'.
const eventName = 'example_time_on_page';

// Capture the starting time
const startDate = new Date();

// Attach event listener
window.addEventListener('pagehide', () => {
  const endDate = new Date();
  const spentTime = (endDate.getTime() - startDate.getTime()) / 1000;

  // Verify that Optimizely is on the page
  if (window.optimizely) {
    // Send event
    window.optimizely.push({
      type: 'event',
      eventName,
      tags: {
        value: spentTime
      }
    });
  }
});