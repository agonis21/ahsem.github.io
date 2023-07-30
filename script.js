var element = document.getElementById("intro");
element.parentNode.removeChild(element);

setTimeout(setInterval(function () {
    var timeNow = new Date().toLocaleString();
    var timestamp = document.getElementById("timestamp");

    timestamp.innerText = timeNow;

}, 1000), 50000);
