chrome.storage.local.get(['percent'], function(result) {
    document.querySelector("div").setAttribute("data-value", String(parseInt(result.percent)))
  });
chrome.storage.local.get(['points'], function(result) {
    document.getElementById("points").innerHTML = result.points + " Points"
  });
