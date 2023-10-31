document.addEventListener('DOMContentLoaded', function () {
    const reservationForm = document.getElementById('reservationForm');
    const reservationStatus = document.getElementById('reservationStatus');
    const showDetailsLink = document.getElementById('showDetailsLink');
    const showDetailsSection = document.getElementById('showDetailsSection');

    const showName = document.getElementById('showName');
    const showRoom = document.getElementById('showRoom');
    const showDate = document.getElementById('showDate');
    const showStartTime = document.getElementById('showStartTime');
    const showEndTime = document.getElementById('showEndTime');
    const showEmail = document.getElementById('showEmail');

    reservationForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get values from the form
        const name = document.getElementById('name').value;
        const room = document.getElementById('room').value;
        const date = document.getElementById('date').value;
        const startTime = document.getElementById('startTime').value;
        const endTime = document.getElementById('endTime').value;
        const email = document.getElementById('email').value;

        // Display reservation details
        showName.textContent = name;
        showRoom.textContent = room;
        showDate.textContent = date;
        showStartTime.textContent = startTime;
        showEndTime.textContent = endTime;
        showEmail.textContent = email;

        // Show the reservation details section
        showDetailsSection.style.display = 'block';

        // Clear the form
        reservationForm.reset();

        // Provide feedback in the reservationStatus div
        reservationStatus.textContent = 'Reservation successful!';
    });

    showDetailsLink.addEventListener('click', function (event) {
        event.preventDefault();
        showDetailsSection.style.display = 'block';
    });
});
