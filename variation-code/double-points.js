// Get Optimizely Utilities library
const utils = window.optimizely.get('utils');

// Wait until the message to appear the page
utils.waitForElement('.vf-order-register-xplr p').then((element) => {

  // Use a regular expression to find the first number in the string
  const regex = /\d+/
  const match = element.textContent.match(regex);

  // If a number was found, ...
  if (match) {
    // get the number
    let points = Number(match[0]);

    // double it
    points *= 2;

    // and update the message
    element.textContent = element.textContent.replace(regex, points);
  }
});
