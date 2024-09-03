(() => {
    let website;
    let currentSite = "";
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        const {type, value, siteId} = obj;
        if (type === "NEW") {
            currentSite = siteId;
        }
    });
})();