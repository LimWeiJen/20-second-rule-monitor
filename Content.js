var websiteLists = null;
chrome.storage.sync.get(["websiteLists"], function (res) {
    websiteLists = res.websiteLists;
    if (websiteLists == null) {
        websiteLists = ["https://www.youtube.com", "https://discord.com", "https://twitter.com", "https://www.instagram.com"];
        chrome.storage.sync.set({ "websiteLists": websiteLists });
    }
    // if the url the user is visiting is in the website lists, trigger the timer
    if (websiteLists.includes(document.location.origin)) {
        var documentOriginalTitle_1 = document.title;
        document.body.style.display = "none";
        document.title = '20';
        // start the timer
        var timerLeft_1 = 20;
        var timer_1 = setInterval(function () {
            // display the time left to the screen
            timerLeft_1--;
            document.title = timerLeft_1.toString();
            // if the timer is up, delete the timer
            if (timerLeft_1 <= 0) {
                document.body.style.overflow = 'auto';
                document.body.style.display = 'block';
                document.title = documentOriginalTitle_1;
                clearInterval(timer_1);
            }
        }, 1000);
    }
});
