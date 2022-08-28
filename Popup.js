var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
chrome.storage.sync.get(["websiteLists"], function (res) {
    var wbList = res.websiteLists;
    if (wbList == null) {
        wbList = ["https://www.youtube.com", "https://discord.com", "https://twitter.com", "https://www.instagram.com"];
        chrome.storage.sync.set({ "websiteLists": wbList });
    }
    wbList.forEach(function (website) {
        var li = document.createElement("li");
        var p = document.createElement("p");
        p.innerHTML = website;
        var btn = document.createElement("button");
        btn.innerHTML = "Remove";
        btn.addEventListener("click", function () {
            wbList.splice(wbList.indexOf(website), 1);
            chrome.storage.sync.set({ "websiteLists": wbList });
            location.reload();
        });
        li.appendChild(p);
        li.appendChild(btn);
        document.getElementsByTagName("ul")[0].appendChild(li);
    });
});
document.getElementById('btn').addEventListener('click', function () {
    chrome.storage.sync.get(["websiteLists"], function (res) {
        var newUrl = document.getElementById('input').value;
        chrome.storage.sync.set({ "websiteLists": __spreadArray(__spreadArray([], res.websiteLists, true), [newUrl], false) });
        document.getElementById('input').value = "";
        location.reload();
    });
});
