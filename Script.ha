document.getElementById('lfgForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const game = document.getElementById('game').value;
    const description = document.getElementById('description').value;

    const group = document.createElement('div');
    group.className = 'group';
    group.innerHTML = `<h2>${game}</h2><p>${description}</p>`;

    document.getElementById('groups').appendChild(group);

    document.getElementById('lfgForm').reset();
});
