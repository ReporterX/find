/**
 *
 * */
Find.register("ContextMenu", function (self) {

    Find.browser.contextMenus.create({
        id: 'show-find',
        title: "Open Find+",
        contexts: ["all"]
    });

    Find.browser.contextMenus.create({
        id: 'find-editable',
        title: "Find Within This Field",
        contexts: ["editable"]
    });

    // Find.browser.contextMenus.onClicked.addListener((info, tab) => {
    //     switch (info.menuItemId) {
    //         case 'show-find':
    //             Find.browser.browserAction.openPopup();
    //             break;
    //         case 'find-editable':
    //             Find.browser.browserAction.openPopup();
    //             break;
    //     }
    // });

    Find.browser.contextMenus.onClicked.addListener(() => {
        chrome.browserAction.openPopup();
    });
});