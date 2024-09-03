
function loadUpcomingEvent() {

    fetch('upcomingEvent.html')
        .then(response => response.text())
        .then(data => {
         
            document.getElementById('event-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading the upcoming event:', error));
}

loadUpcomingEvent();
