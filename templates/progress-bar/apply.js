const freeShippingThreshold = 99.00;

const utils = window.optimizely.get('utils');

// Get the order summery element from page
utils.waitForElement('[data-test-id="cart-order-summary"]').then((summaryElement) => {
  // Insert template
  summaryElement.insertAdjacentHTML('beforeend', extension.$html);

  // Get elements from template
  const textElem = document.getElementById('progress-bar-text');
  const widthElem = document.getElementById('progress-bar-width');

  // Get element from page
  const subtotalElem = document.querySelector('[data-test-id="cart-order-summary"] > .text-sm > .flex > span:nth-of-type(2)');

  // Define update function using variables in current scope
  const updateProgress = () => {
    // Get sub total and percentage to free shipping
    const subtotal = parseFloat(subtotalElem.textContent.replace('$', ''));
    const percentage = Math.min(Math.round(subtotal / freeShippingThreshold * 100.00), 100);

    // Update dynamic elements in cart
    widthElem.title = widthElem.style.width = `${percentage}%`;
    if (subtotal < freeShippingThreshold) {
      textElem.textContent = `Free Shipping on orders over \$${freeShippingThreshold}`;
    } else {
      textElem.textContent = 'Your order qualifies for free shipping!';
    }
  }

  // Update once on activation, ...
  updateProgress();
  // ... and monitor for updates to the subtotal
  const observer = new MutationObserver(updateProgress);
  observer.observe(subtotalElem, { characterData: true });
});
