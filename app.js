// Service Worker Registration
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log("Service Worker Registered Successfully!"))
    .catch(error => console.log("Service Worker Registration Failed: ", error));
}