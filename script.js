setTimeout(setInterval(function () {
    var timeNow = new Date().toLocaleString();
    var timestamp = document.getElementById("timestamp");

    timestamp.innerText = timeNow;

}, 1000), 50000);


document.getElementById('intro').addEventListener('ended', myHandler, false);
function myHandler(e) {
    var element = document.getElementById("intro");
    element.parentNode.removeChild(element);
}