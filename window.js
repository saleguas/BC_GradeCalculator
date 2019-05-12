chrome.storage.local.get(['percent'], function(result) {
    document.getElementById("percent").className = "c100 p" + result.percent + " big green"
    document.getElementById("percent2").innerHTML = result.percent + "%"
  });
chrome.storage.local.get(['points'], function(result) {
    document.getElementById("points").innerHTML = result.points + " Points"
  });
