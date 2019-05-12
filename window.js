chrome.storage.local.get(['percent'], function(result) {
    var color = "big green";
    let num = parseInt(result.percent)
    if(num < 80)
      color = "big orange"
    if(num < 60)
      color = "big"

    document.getElementById("percent").className = "c100 p" + result.percent + " " +color;
    document.getElementById("percent2").innerHTML = result.percent + "%"
  });
chrome.storage.local.get(['points'], function(result) {
    document.getElementById("points").innerHTML = result.points + " Points"
  });
