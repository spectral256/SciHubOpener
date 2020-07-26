browser.menus.create({
    id: "sci-hub-open",
    title: "Open in Sci-Hub",
    contexts: ["selection"]
});

browser.menus.onClicked.addListener(function(info, tab) {
    switch (info.menuItemId) {
      case "sci-hub-open":
        var url = `https://sci-hub.tw/${info.selectionText}`;
        createTab(url);
    }
  });

  function createTab(url){
      browser.tabs.create({
          url:url
      });
  }