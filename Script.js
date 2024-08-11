document.getElementById('lfgForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const game = document.getElementById('game').value.trim();
    const description = document.getElementById('description').value.trim();

    if (game === '' || description === '') {
        alert('Please fill in all fields.');
        return;
    }

    const group = document.createElement('div');
    group.className = 'group';
    group.innerHTML = `<h2>${game}</h2><p>${description}</p>`;

    document.getElementById('groups').appendChild(group);

    document.getElementById('lfgForm').reset();
});
