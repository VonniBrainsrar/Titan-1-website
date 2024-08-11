firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        if (user.emailVerified) {
            // User is signed in and email is verified
            document.getElementById('lfgForm').style.display = 'block';
        } else {
            // User is signed in but email is not verified
            alert('Please verify your email to access this feature.');
            document.getElementById('lfgForm').style.display = 'none';
        }
    } else {
        // No user is signed in
        document.getElementById('lfgForm').style.display = 'none';
    }
});
