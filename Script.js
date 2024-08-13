const groups = [];

document.getElementById('lfgForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const game = document.getElementById('game').value.trim();
    const description = document.getElementById('description').value.trim();

    if (game === '' || description === '') {
        alert('Please fill in all fields.');
        return;
    }

    const group = {
        game: game,
        description: description,
        timestamp: new Date()
    };

    groups.unshift(group);
    displayGroups();

    document.getElementById('lfgForm').reset();
});

function displayGroups() {
    const groupList = document.getElementById('groups');
    groupList.innerHTML = '<h2>Recently Created Groups</h2>';

    groups.forEach(group => {
        const groupItem = document.createElement('div');
        groupItem.className = 'group';
        groupItem.innerHTML = `
            <h2>${group.game}</h2>
            <p>${group.description}</p>
            <div class="countdown-timer" data-timestamp="${group.timestamp.toISOString()}"></div>
        `;
        groupList.appendChild(groupItem);
    });

    updateCountdownTimers();
}

function updateCountdownTimers() {
    const now = new Date();
    document.querySelectorAll('.countdown-timer').forEach(timer => {
        const timestamp = new Date(timer.getAttribute('data-timestamp'));
        const timeDiff = Math.max(0, 20 - Math.floor((now - timestamp) / 1000));
        timer.textContent = `Expires in ${timeDiff} seconds`;
    });
}

// Update the group list and countdown timers every 20 seconds
setInterval(() => {
    displayGroups();
}, 20000);

// Initial call to display groups and start countdown timers
displayGroups();
