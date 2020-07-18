const form = document.getElementById('form');
const input = document.getElementById('input');
const alerts = document.getElementById('alerts');

form.addEventListener('submit', function () {
    if (input.value == "Meh" || input.value == "Good" || input.value == "Bad") {
        alerts.textContent = "nIcE yOuR nOt A bOt!"
    } else {
        alerts.textContent = "ALERT! ALERT! ALERT! ALERT! ALERT! ALERT! ALERT! ALERT! ALERT! ALERT! ALERT! ALERT! BOT! BOT! BOT!"
    }

})