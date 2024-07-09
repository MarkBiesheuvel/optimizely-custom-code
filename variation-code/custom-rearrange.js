// Get Optimizely Utilities library
const utils = window.optimizely.get('utils');

// Wait until all elements are on the page
Promise.all([
  utils.waitForElement('.product-delivery-estimate'),
  utils.waitForElement('.product-page__info'),
  utils.waitForElement('.product-details')
]).then(([estimate, info, details]) => {
  // Move the estimate in front of the details
  estimate.parentNode.removeChild(estimate);
  info.insertBefore(estimate, details);
});
