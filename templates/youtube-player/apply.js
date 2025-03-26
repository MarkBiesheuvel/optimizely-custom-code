// Local helper function to send Optimizely custom event with event properties
const sendEvent = (eventName, youTubeEvent) => {
  window.optimizely.push({
    type: 'event',
    eventName,
    properties: {
      SKU: extension.videoId,
      Text: youTubeEvent.target.videoTitle
    }
  });
};

// Local helper function to initialize YouTube player
const initializePlayer = () => {
  new window.YT.Player(`optimizely-extension-${extension.$instance}`, {
    height: extension.height,
    width: extension.width,
    videoId: extension.videoId,
    playerVars: {
      playsinline: 1
    },
    events: {
      onReady: (event) => {
        // YouTube player has successfully loaded
        sendEvent('youtube_ready', event);
      },
      onStateChange: (event) => {
        switch(event.data) {
          case YT.PlayerState.PLAYING:
            // Pressed play
            sendEvent('youtube_play', event);
            break;
          case YT.PlayerState.PAUSED:
            // Pressed pause
            sendEvent('youtube_pause', event);
            break;
          case YT.PlayerState.ENDED:
            // Video ended
            sendEvent('youtube_end', event);
            break;
          default:
            // No-op
        }
      }
    }
  });
};

// Get Optimizely Utilities library
const utils = window.optimizely.get('utils');

// Wait for the selected video placement to appear in the DOM
utils.waitForElement(extension.selector).then((elem) => {
  // Insert HTML template
  elem.insertAdjacentHTML(extension.position, extension.$html);

  // Check whether the YouTube IFrame API has already loaded
  if (window.YT) {
    // Initialize YouTube player - Immediately
    initializePlayer();
  } else {
    // Define global callback function for YouTube IFrame API
    window.onYouTubeIframeAPIReady = () => {
      // Initialize YouTube player - When ready
      initializePlayer();
    };

    // Insert YouTube IFrame API script
    const scriptTag = document.createElement('script');
    scriptTag.src = "https://www.youtube.com/iframe_api";
    document.getElementsByTagName('head')[0].append(scriptTag);
  }
});
