function updateDateTime() {
    const dateTimeElement = document.getElementById('datetime');
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const parts = now.toLocaleDateString('en-US', options).split(' ');

    const month = parts[0];
    const day = parts[1].replace(',', '');
    const year = parts[2];

    const formattedDate = `${year} . ${month} . ${day}`;
    dateTimeElement.textContent = formattedDate;
}

// Update the date immediately on page load
updateDateTime();

// Update the date every second
setInterval(updateDateTime, 1000);