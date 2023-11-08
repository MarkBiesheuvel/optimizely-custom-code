// Get Optimizely Utilities library
const utils = window.optimizely.get('utils');

// Wait until donationAmountOther is on to the page
utils.waitForElement('[name="donationAmountOther"]').then((element) => {
    // Update placeholder
    element.placeholder="10";
});