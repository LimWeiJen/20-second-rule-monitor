var websiteLists: Array<string> | null = null;

chrome.storage.sync.get(["websiteLists"], (res) => {
	websiteLists = res.websiteLists;

	if (websiteLists == null) {
		websiteLists = ["https://www.youtube.com", "https://discord.com", "https://twitter.com", "https://www.instagram.com"];
		chrome.storage.sync.set({ "websiteLists": websiteLists });
	}
	
	// if the url the user is visiting is in the website lists, trigger the timer
	if (websiteLists.includes(document.location.origin)) {
		let documentOriginalTitle = document.title;

		document.body.style.display = "none";
		document.title = '20';

		// start the timer
		let timerLeft = 20;
		let timer = setInterval(() => {
			// display the time left to the screen
			timerLeft--;
			document.title = timerLeft.toString();

			// if the timer is up, delete the timer
			if (timerLeft <= 0) {
				document.body.style.overflow = 'auto';
				document.body.style.display = 'block';
				document.title = documentOriginalTitle;
				clearInterval(timer);
			}
		}, 1000);
	}
})
