browser.menus.create({
    id: "sci-hub-open",
    title: "Open in Sci-Hub",
    contexts: ["link", "selection"]
});

browser.menus.onClicked.addListener(function(info, tab) {
    switch (info.menuItemId) {
      case "sci-hub-open":
          var path;
          if(info.hasOwnProperty("linkUrl")){
              path = info.linkUrl;
          }
          else if(info.hasOwnProperty("selectionText")){
              path = info.selectionText;
          }
        var url = `https://sci-hub.tw/${path}`;
        createTab(url);
    }
  });

  function createTab(url){
      browser.tabs.create({
          url:url
      });
  }