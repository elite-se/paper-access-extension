const TUMeaccessUrl = "eaccess.ub.tum.de"
const LMUeaccessUrl = "emedien.ub.uni-muenchen.de"

function accessPaper(accessUrl) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { accessUrl }, function (response) {
            console.log('success');
        });
    });
}

document.getElementById('lmu').addEventListener('click', () => accessPaper(LMUeaccessUrl));
document.getElementById('tum').addEventListener('click', () => accessPaper(TUMeaccessUrl));