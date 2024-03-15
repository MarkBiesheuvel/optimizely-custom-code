// Get Optimizely Utilities library
const utils = window.optimizely.get('utils');

// Wait until the .delivery-info element is on to the page
utils.waitForElement('.delivery-info').then((deliveryInfoElement) => {

  // Wait for each of the .product-size buttons
  utils.observeSelector('.product-size', (productSizeElement) => {

    // Detect whether the size is in stock
    const inStock = !productSizeElement.className.includes('--notInStock');

    // If a .product-size button is clicked, hide/show the .delivery-info element
    productSizeElement.addEventListener('click', () => {
      if (inStock) {
        deliveryInfoElement.style = 'display:flex;';
      } else {
        deliveryInfoElement.style = 'display:none;';
      }
    });
  });
});
