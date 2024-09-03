chrome.tabs.onUpdated.addListener((tabId, tab) => {
    console.log(tabId);
    if (tab.url && tab.url.includes("orion.managewp.com/dashboard/site/")) {
        const queryParameters = tab.url.split("/");
        console.log(queryParameters);

        // const urlParameters = new URLSearchParams(queryParameters);

        chrome.tabs.sendMessage(tabId, {
            type: "NEW",
            siteId: queryParameters,
        });
    }
});