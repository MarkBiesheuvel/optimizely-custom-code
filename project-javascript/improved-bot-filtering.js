// Initialize the Optimizely global variable
window.optimizely = window.optimizely || [];

// List of automated website testers
const botList = [
  'Chrome-Lighthouse',
  'DatadogSynthetics',
  'Googlebot',
  'Storebot-Google',
  'Speed Insights',
  'WebPageTest',
  'HeadlessChrome',
  'Pingdom',
  'GTmetrix',
  'PhantomJS'
];

// Iterate through list of bots
botList.forEach((bot) => {
  // Check whether the current user agent includes a bot indicator
  if (window.navigator.userAgent.includes(bot)) {
    // Disabling tracking
    window.optimizely.push({
      type: 'holdEvents',
    });
  }
});
