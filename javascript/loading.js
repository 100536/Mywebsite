function navigateTo(url) {
    // Show the loading screen
    document.getElementById('loadingScreen').style.display = 'flex';
    // Redirect to the desired URL after 1 second
    setTimeout(function() {
        window.location.href = url;
    }, 1000);
}