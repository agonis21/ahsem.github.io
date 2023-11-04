setTimeout(setInterval(function () {
    var timeNow = new Date().toLocaleString();
    var timestamp = document.getElementById("timestamp");

    timestamp.innerHTML = "<a style=\"color:black; text-decoration: none;\" href=\"blank.html\">ahsem.nyc</a> &copy; " + timeNow;

}, 1000), 50000);


document.getElementById('intro').addEventListener('ended', myHandler, false);
function myHandler(e) {
    var element = document.getElementById("intro");
    element.parentNode.removeChild(element);
}