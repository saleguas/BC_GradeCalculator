chrome.storage.local.get(['percent'], function(result) {
    var color = "big green";
    if(result.percent < 80)
      color = "big dark"
    if(result.percent < 70)
      color = "big dark orange"

    document.getElementById("percent").className = "c100 p" + result.percent + " " +color;
    document.getElementById("percent2").innerHTML = result.percent + "%"
  });
chrome.storage.local.get(['points'], function(result) {
    document.getElementById("points").innerHTML = result.points + " Points"
  });
