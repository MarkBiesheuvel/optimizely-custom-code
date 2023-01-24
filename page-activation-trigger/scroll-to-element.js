// Using the "When a callback is called" page activation trigger
// See https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-callback


// Use "old" function syntax as the Optimizely editor does not allow arrow syntax here
function callbackFn(activate) {

  // Get Optimizely Utilities library
  const utils = window.optimizely.get('utils');

  // Wait/listen for a given selector
  utils.waitForElement('.product-sizes__product-size-container').then((elem) => {

    // Create a observer for the entire viewport
    const observer = new IntersectionObserver((entries, observer) => {

      // Iterate over entries
      entries.forEach((entry) => {
        // If entry is visible ...
        if (entry.isIntersecting) {
          // Activate experiment
          activate();

          // Deactivate observer
          observer.disconnect();
        }
      });
    });
    
    // Only activate the page/experiment once the container is visible
    observer.observe(elem);
  });
}