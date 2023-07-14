// Using the "When a callback is called" page activation trigger
// See https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-callback
function callbackFn(activate) {

  // Get Optimizely Utilities library
  const utils = window.optimizely.get('utils');

  // Wait/listen for a given selector
  utils.waitForElement('[pw-automation-id="pw-nav-search-button"]').then((elem) => {
    // Add click event listener
    elem.addEventListener('click', () => {
      // Activate experiment
      activate();
    });
  });
}