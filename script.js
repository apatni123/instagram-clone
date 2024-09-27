document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    // Simulate login and navigate to feed page
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('feed-page').style.display = 'block';
});

// For demonstration, you could add click handlers to navigate to account page
document.querySelectorAll('.post').forEach(post => {
    post.addEventListener('click', function() {
        document.getElementById('feed-page').style.display = 'none';
        document.getElementById('account-page').style.display = 'block';
    });
});

// Optional: Add a way to go back to feed from account
document.querySelector('.navbar').addEventListener('click', function() {
    document.getElementById('account-page').style.display = 'none';
    document.getElementById('feed-page').style.display = 'block';
});
