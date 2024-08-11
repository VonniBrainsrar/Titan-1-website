document.getElementById('resendVerification').addEventListener('click', function() {
    const user = firebase.auth().currentUser;
    if (user) {
        user.sendEmailVerification()
            .then(() => {
                alert('Verification email resent!');
            })
            .catch((error) => {
                alert('Error: ' + error.message);
            });
    }
});
