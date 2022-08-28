chrome.storage.sync.get(["websiteLists"], (res) => {
	let wbList = res.websiteLists;

	if (wbList == null) {
		wbList = ["https://www.youtube.com", "https://discord.com", "https://twitter.com", "https://www.instagram.com"];
		chrome.storage.sync.set({ "websiteLists": wbList });
	}

	wbList.forEach(website => {
		let li = document.createElement("li");

		let p = document.createElement("p");
		p.innerHTML = website;

		let btn = document.createElement("button");
		btn.innerHTML = "Remove";
		btn.addEventListener("click", () => {
			wbList.splice(wbList.indexOf(website), 1);
			chrome.storage.sync.set({ "websiteLists": wbList });
			location.reload();
		})

		li.appendChild(p);
		li.appendChild(btn);
		document.getElementsByTagName("ul")[0].appendChild(li);
	})
})

document.getElementById('btn').addEventListener('click', () => {
	chrome.storage.sync.get(["websiteLists"], (res) => {
		let newUrl = (document.getElementById('input') as HTMLInputElement).value;
		chrome.storage.sync.set({ "websiteLists": [...res.websiteLists, newUrl] });
		(document.getElementById('input') as HTMLInputElement).value = "";
		location.reload();
	})
})
