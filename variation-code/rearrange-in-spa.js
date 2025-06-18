// Get Optimizely Utilities library
const utils = window.optimizely.get('utils');

// Only apply these changes one time, since we create a continuous listener
if (!('isUpsellTestRunning' in window.optimizely)) {
  // Set a custom key in the Optimizely object
  window.optimizely.isUpsellTestRunning = true;

  // Listen for the upsell component being (re)rendered
  utils.observeSelector('[data-test-id="product-upsell"] > [data-test-id="product-upsell"]', (upsellComponent) => {
    // Look up the latest add-to-cart button as this button might also be rerendered
    utils.waitForElement('#pdp-add-to-cart').then((addToCartButton) => {
      // Take the containers which are both two levels up
      const upsellContainer = upsellComponent.parentNode.parentNode;
      const addToCartContainer = addToCartButton.parentNode.parentNode;

      // Move the upsell element after the add-to-cart button
      addToCartContainer.parentNode.insertBefore(upsellContainer, addToCartContainer.nextSibling);
    });
  });
}