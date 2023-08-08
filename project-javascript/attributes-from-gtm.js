// Initialize the Optimizely global variable
window.optimizely = window.optimizely || [];

// Find the GTM dataLayer event with name `sqzl_customer_audiences`
const sqzlAudiences = dataLayer.find(({event}) => event == 'sqzl_customer_audiences');

// Set custom user attributes if `sqzl_customer_audiences` is found
if (sqzlAudiences) {
    window.optimizely.push({
        type: 'user',
        attributes: {
            isFoo: sqzlAudiences.audiences.indexOf(111) !== -1,
            isBar: sqzlAudiences.audiences.indexOf(222) !== -1
        }
    });
}
