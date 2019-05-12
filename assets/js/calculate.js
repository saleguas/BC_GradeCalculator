var ak = $("label")
var received = 0
var total = 0
var endPercent = 0
for(i = 1; i < ak.length; i++)
{
    let a = String(ak[i-1].innerText)
    let b = String(ak[i].innerText)
    if (a.includes(" / ") && b.includes("%")){
        let nums = a.split(" / ")
        if (nums[0] != "-") {
            received = received + Number(nums[0])
            total = total + Number(nums[1])
        }
    }
}
console.log(received)
console.log(total)
console.log(received/total)
endPercent = parseInt((received/total)*100)

var color = "bg-success";
if (endPercent < 90)
    color = "bg-info";
if (endPercent < 80)
    color = "bg-warning";
if (endPercent > 70)
    color = "bg-danger";
console.log(color)
chrome.storage.local.set({percent: String(endPercent)}, function() {
});
chrome.storage.local.set({points: parseFloat(received.toFixed(4))}, function() {
});
chrome.storage.local.set({points2: parseFloat(total.toFixed(4))}, function(){

});
// document.getElementsByTagName("header")[0].innerHTML += "<b>" + `
// <div class="progress">
//   <div class="progress-bar ` + color + `" style="width:` + String(endPercent) + `%">` + String(endPercent) + `%</div>
// </div>
// `
document.getElementsByTagName("header")[0].innerHTML += "<b>" + `
<div class="progress">
  <div id="dynamic" class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%">
    <span id="current-progress"></span>
  </div>
</div>`

// $(function() { 
//     $("#dynamic").addClass("progress-bar-purple");
//     $("#dynamic").addClass("progress-bar-orange");
//  });

$(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 1;
        $("#dynamic")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "%");
        var attrs = $("#dynamic").attr("class").split(" ")
        // console.log(attrs);
        if(current_progress < 90)
            attrs[1] = "progress-bar-green";
        if(current_progress < 80)
            attrs[1] = "progress-bar-darkgreen";
        if(current_progress < 70)
            attrs[1] = "progress-bar-yellow";
        if(current_progress < 60)
            attrs[1] = "progress-bar-darkred";

        attrs = attrs.join(" ");
        // console.log(attrs)
        $("#dynamic").attr("class", attrs);

        if (current_progress >= endPercent)
            clearInterval(interval);
    }, 50);
  });