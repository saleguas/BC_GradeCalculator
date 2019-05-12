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
endPercent = (received/total)*100

chrome.storage.local.set({percent: endPercent.toFixed(1)}, function() {
});
chrome.storage.local.set({points: received}, function() {
});