chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs){
    var url = String(tabs[0].url)
    if (url.includes("://bconline.broward.edu/d2l/lms/grades/my_grades")){
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
    var build = "";
    chrome.storage.local.get(['points'], function(result) {
        build += result.points + "/ "
    });
    chrome.storage.local.get(['points2'], function(result) {
        document.getElementById("points").innerHTML = build + result.points2 + " points"
    });
    
    
}
})