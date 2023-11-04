var i = 0;

setTimeout(setInterval(function () {
    i++;
    var original_text = "99 EMBROIDERED T-SHIRT";
    var original_price = "$99";
    var timeNow = new Date().toLocaleString();
    var timestamp = document.getElementById("timestamp");

    timestamp.innerText = timeNow;
    if (i % 4 == 0) {
        timestamp.innerText = original_text;
    }
    if (i % 5 == 0) {
        timestamp.innerText = original_price;
    }
    

}, 1000), 2000);
