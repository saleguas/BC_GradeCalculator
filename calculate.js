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
if (endPercent > 90)
    color = "bg-info";
if (endPercent < 80)
    color = "bg-warning";
if (endPercent > 70)
    color = "bg-danger";
console.log(color)
chrome.storage.local.set({percent: String(endPercent)}, function() {
});
chrome.storage.local.set({points: received}, function() {
});
document.getElementsByTagName("header")[0].innerHTML += "<b>" + `<html>
<div class="progress">
  <div class="progress-bar ` + color + `" style="width:` + String(endPercent) + `%">` + String(endPercent) + `%</div>
</div>
`