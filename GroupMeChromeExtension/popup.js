var signInURL = "https://oauth.groupme.com/oauth/authorize?client_id=nSI7cg53GVRTKowPId7Bwsay6masAzYjmSzsEQb44i2FvDUP";
var accessToken = "0acd551054550132daac1a4b1c61026e";

var oauth = ChromeExAuth.initBackgroundPage({
    'request_url': 
});

window.addEventListener("load", function () {
    if (chrome.storage.local.get("oauth_key", function () { }) == null) {
        document.getElementById("signInButton").className = "show";
    } else {
        document.getElementById("signInButton").className = "hide";
    }
});

function signIn() {

}