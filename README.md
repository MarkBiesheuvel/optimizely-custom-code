# Examples of custom code within Optimizely

This repository contains examples of custom code which can be used within Optimizely. The examples are organized into different categories.

## Page activation trigger

Within an page definition you can use a custom page activation trigger to delay the activation of a page (and thus the experiments attached to it). For example, instead of activating the page when the website loads, you could activate the experiment after an user interaction.

* [Activate page when user click search button](./page-activation-trigger/click-on-button.js)
* [Activate page when user scrolls down to a specific element](./page-activation-trigger/scroll-to-element.js)

## Page condition

Instead of matching a page based on a URL pattern or on a CSS selector, it's also possible to write a custom JavaScript condition.

* [Matching a specific event in the GTM `dataLayer` object](./page-condition/gtm-datalayer.js)

## Project-level JavaScript

In your Optimizely project settings, you can add custom JavaScript code that will be run every time the Optimizely snippet is loaded. This can be used to configure custom attributes. Note that the `optimizely` object won't be initialized yet, so make sure to initialize this variable.

* [Set a custom user attribute based on a cookie](./project-javascript/attributes-from-cookie.js)
* [Set a custom user attribute based on an event in the GTM `dataLayer` object](./project-javascript/attributes-from-gtm.js)
* [Set a custom user attribute based on the domain name](./project-javascript/attributes-from-host.js)
* [Set a custom user attribute based on the query string](./project-javascript/attributes-from-search.js)

## Experiment-level (Shared) Code

In an experiment, you can add custom JavaScript code that will be run for every variation. Note that this includes the original variation. This can be used to set up custom event tracking consistently across all variations.

* [Track "time on page" for an experiment](./shared-code/time-on-page.js)

## Variation-level Code

Lastly, in a variation, you can add custom JavaScript code to create functional changes instead of just visual changes.

* [Add price of current product to the "add to cart" button](./variation-code/add-price-to-addtocart-button.js)
* [Adjust the `placeholder` attribute of an `input` element](./variation-code/adjust-placeholder.js)
* [Hide delivery information for sizes that are out of stock](./variation-code/hide-show-on-click.js)
* [Rearrange labels within each product item on overview page with infinite scroll](./variation-code/move-elements-infinite-scroll.js)
* [Swap the link URL and text of two buttons](./variation-code/swap-link-text.js)
