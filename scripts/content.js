/**
 * Replace the currently active url xay.abc.com/... with a version xay-abc-com.<accessUrl>/...
 * And navigate to that new url.
 * 
 * The <accessUrl> is provided by the message request
 */
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    let currentLocation = document.location;

    //ensure idempotence
    if (!currentLocation.hostname.includes(request.accessUrl)) {
        let newURL = currentLocation.protocol + "//";

        let paperAccessHostName = currentLocation.hostname.replaceAll('.', '-') + "." + request.accessUrl;

        newURL += paperAccessHostName + (currentLocation.port.length > 0 ? ":" + currentLocation.port : "") + currentLocation.pathname + currentLocation.search + currentLocation.hash;

        console.log("Redirect to: " + newURL);

        document.location.assign(newURL);
    } else {
        //we already are on a "accessified" page, do nothing :)
    }

    sendResponse({ success: true });
});

console.log("Registered Paper Access Extension");