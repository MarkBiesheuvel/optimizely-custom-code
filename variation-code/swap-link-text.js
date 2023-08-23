// Get Optimizely Utilities library
const utils = window.optimizely.get('utils');

// Wait until new resort card elements are added to the page (via infinite scroll)
utils.observeSelector('[data-cy="resortCard"]', (card) => {
  // Find links within the card (primary has a background, secondary has not)
  const primaryLink = card.querySelector('a.bg-ep-blue-050');
  const secondaryLink = card.querySelector('a.bg-none');

  // Find the span within the links
  const primarySpan = primaryLink.querySelector('span');
  const secondarySpan = secondaryLink.querySelector('span');

  // Swap the text within the spans
  const tempText = primarySpan.innerHTML;
  primarySpan.innerHTML = secondarySpan.innerHTML;
  secondarySpan.innerHTML = tempText;

  // Swap the destination URL of the links
  const tempHref = primaryLink.href;
  primaryLink.href = secondaryLink.href;
  secondaryLink.href = tempHref;
});