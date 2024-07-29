function redirectToUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const targetUrl = urlParams.get('u');
    if (targetUrl) {
        var redirect = decodeURIComponent(targetUrl);
        if (
               redirect.startsWith('steam://openurl/https://steamcommunity.com/sharedfiles/filedetails')
            || redirect.startsWith('steam://openurl/https://store.steampowered.com')
        ) {
            window.location.href = redirect
            return
        } else (
            document.body.innerHTML = 'Non-Steam URL detected, not redirecting. If you believe this is a mistake, please e-mail <a href=mailto:electrovoyagesoftware@gmail.com>electrovoyagesoftware@gmail.com</a>, explaining the issue.<br><br><a href=https://tpecool.github.io>Back to electrovoyage\'s corner</a>'
        )
    }
    //document.body.innerHTML = 'No URL provided.';
    //window.location.href = "https://tpecool.github.io"
}
window.onload = redirectToUrl;