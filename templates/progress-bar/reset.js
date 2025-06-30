// Find and remove HTML template
const extensionElement = document.getElementById(`optimizely-extension-${extension.$instance}`);
if (extensionElement) {
  extensionElement.remove();
}