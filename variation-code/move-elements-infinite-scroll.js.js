// Get Optimizely Utilities library
const utils = window.optimizely.get('utils');

// Wait until new .product-label elements are added to the page (via infinite scroll)
utils.observeSelector('.product-label', (label) => {

  // Find the parent element
  const parent = label.closest('.product-card');
  
  // Find a child of the same parent (i.e. a sibling)
  const imageWrapper = parent.querySelector('.product-card__image-wrapper');

  // Move the .product-label in front of its sibling
  parent.insertBefore(label, imageWrapper);
});
