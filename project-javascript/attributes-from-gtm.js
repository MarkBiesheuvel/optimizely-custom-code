// Initialize the Optimizely and dataLayer global variable
window.optimizely = window.optimizely || [];
window.dataLayer = window.dataLayer || [];

// Find the GTM dataLayer event with name `page_view`
const pageEvent = dataLayer.find(({event}) => event == 'page_view');

if (pageEvent) {
  // Update account_type attribute if `page_view` was found
  window.optimizely.push({
    type: 'user',
    attributes: {
      account_type: pageEvent.account_type
    }
  });
} else {
  // Capture the original dataLayer.push function
  const originalPushFunction = window.dataLayer.push;

  window.dataLayer.push = function() {
    // Collect the arguments
    const args = [].slice.call(arguments, 0);

    // Deconstruct event
    const {event, account_type} = arguments[0];

    // Update account_type attribute
    if (event === 'page_view') {
      window.optimizely.push({
        type: 'user',
        attributes: {
          account_type
        }
      });
    }

    // Run the original dataLayer.push function
    return originalPushFunction.apply(window.dataLayer, args);
  };
}
