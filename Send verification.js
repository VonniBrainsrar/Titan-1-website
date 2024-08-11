// Register User and Send Verification Email
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            user.sendEmailVerification()
                .then(() => {
                    alert('Verification email sent!');
                })
                .catch((error) => {
                    alert('Error: ' + error.message);
                });
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
});
