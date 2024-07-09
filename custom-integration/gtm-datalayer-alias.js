// Extract additional variables from `arguments[0]` aka `decisionData`
let {
    experimentName,
    variationName
} = decisionData;

// Initialize dataLayer if it doesn't exist yet
window.gtmDataLayer = window.gtmDataLayer || [];

// Verify whether the visitor was a part of the audience
if (experimentId !== null && variationId !== null) {

    // Push event
    window.gtmDataLayer.push({
        event: 'experience_impression',
        exp_variant_string: `OPT-${experimentId}(${experimentName})-${variationId}(${variationName})`,
    });
}