document.addEventListener('DOMContentLoaded', () => {
    const discordCheckbox = document.getElementById('discord-checkbox');
    const discordContainer = document.getElementById('discord-container');

    discordCheckbox.addEventListener('change', () => {
        if (discordCheckbox.checked) {
            discordContainer.style.display = 'block';
        } else {
            discordContainer.style.display = 'none';
        }
    });
});