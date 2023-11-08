// Get Optimizely Utilities library
const utils = window.optimizely.get('utils');

// Wait until the price element is on to the page
utils.waitForElement('.b-price-item').then((priceElem) => {
  // Get the price
  const price = priceElem.innerHTML;

  // Wait until the addToCart button is on to the page
  utils.waitForElement('.b-product_actions-buttons .b-button_multi_state span').then((addToCartElem) => {
    // Update button text
    addToCartElem.innerHTML = priceElem.innerHTML + ' - ' + addToCartElem.innerHTML;
  });
});
