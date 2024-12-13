// List of paths where Optimizely should run. This will include all sub pages.
const paths = [
    '/analytics',
    '/custom',
];

// Initialize the Optimizely global variable
window.optimizely = window.optimizely || [];

// If the current URL does not match any path, disable Optimizely before it can start
if (!paths.some(path => window.location.pathname.includes(path))) {
    window.optimizely.push({
        type: 'disable'
    });
}
