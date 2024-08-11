firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        document.getElementById('lfgForm').style.display = 'block';
    } else {
        // No user is signed in
        document.getElementById('lfgForm').style.display = 'none';
    }
});
