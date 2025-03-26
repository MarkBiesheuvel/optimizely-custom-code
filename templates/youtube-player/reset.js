// Find and remove HTML template
const elem = document.getElementById(`optimizely-extension-${extension.$instance}`);
if (elem) {
  elem.parentElement.removeChild(elem);
}
