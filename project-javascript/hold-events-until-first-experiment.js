(() => {
  // NOTE: set this to true if your project is linked
  const isLinkedProject = false;

  // Initialize the Optimizely global variable
  window.optimizely = window.optimizely || [];

  // Hold events while Optimizely loads
  window.optimizely.push({
    type: 'holdEvents'
  });

  // Once Optimizely is activated, verify whether there are experiments running
  window.optimizely.push({
    type: 'addListener',
    filter: {
      type: 'lifecycle',
      name: 'activated'
    },
    handler: () => {
      // Extract various IDs from the Optimizely object
      const variationMap = window.optimizely.get('state').getVariationMap({});
      const {accountId, projectId} = window.optimizely.get('data');
      const {visitorId} = window.optimizely.get('visitor');

      // Generate the project namespace from either the account ID or project ID
      const projectNamespace = isLinkedProject? `a${accountId}` : projectId;

      // Verify whether the visitors has been included in any experiments
      if (Object.keys(variationMap).length > 0) {
        // Allow events to be send
        window.optimizely.push({
          type: 'sendEvents'
        });
      } else {
        // Delete the previously created variables in localStorage which could build up over time
        const keys = [
          `optimizely_data$$${visitorId}$$${projectNamespace}$$tracker_optimizely`,
          `optimizely_data$$${visitorId}$$${projectNamespace}$$event_queue`,
          `optimizely_data$$${visitorId}$$${projectNamespace}$$events`
        ];
        keys.forEach((key) => {
          window.localStorage.removeItem(key);
        });
      }
    }
  });

  // Once a decision is received on the current page, ...
  window.optimizely.push({
    type: 'addListener',
    filter: {
      type: 'lifecycle',
      name: 'campaignDecided'
    },
    handler: () => {
      // Allow events to be send
      window.optimizely.push({
        type: 'sendEvents'
      });
    }
  });
})();