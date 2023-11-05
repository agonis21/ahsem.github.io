setTimeout(setInterval(function () {
    var datetime = new Date().toLocaleString().split(",");
    var timeNow = datetime[1];
    var dateNow = datetime[0];

    var timestamp = document.getElementById("timestamp");
    var timeBengali = convertDateToBangla(timeNow);
    var dateBengali = convertDateToBangla(dateNow);
    //console.log(bengali_timestamp);

    var separator = " - " //" &#169; ";
    var timeStr = dateBengali + separator + timeBengali;

    if (Math.random() > 0.8) {
        timeStr = dateNow + separator + timeNow;
    }

    timestamp.innerHTML = "<a style=\"color:black; text-decoration: none;\" href=\"blank.html\">ahsem.nyc</a> &copy; "
        + timeStr;

}, 1000), 50000);


document.getElementById('intro').addEventListener('ended', myHandler, false);
function myHandler(e) {
    var element = document.getElementById("intro");
    element.parentNode.removeChild(element);
}



function convertDateToBangla (english_date) {
    var character_map = { '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪', '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯' };

    var bengali_date = "";

    for (var i = 0; i < english_date.length; i++) {
        //console.log(english_date[i]);
        if (english_date[i] in character_map) {
            bengali_date += character_map[english_date[i]];
        } else {
            bengali_date += english_date[i];
        }
    }

    return bengali_date;

};