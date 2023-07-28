const downloadT = document.querySelector(".downloadT")
const downloadLinkT = document.querySelector(".linkT")

function isIOSorAndroid() {
    const userAgent = navigator.userAgent.toLowerCase();
    downloadLinkT.addEventListener ("click", () =>{
        if (/android/.test(userAgent)) {
            downloadLinkT.href = "https://play.google.com/store/apps/details?id=com.parkway.yurwallet"
            return 'Android';
        } else if (/iphone|ipad|ipod/.test(userAgent)) {
            downloadLinkT.href = "https://apps.apple.com/app/parkway-wallet/id6451072719/"
            return 'iOS';
        } else {
            downloadLinkT.href = "../landing page.html#download-box"
            return 'Unknown';
        }
    })
}
  const deviceType = isIOSorAndroid();
  console.log(`This device is running ${deviceType}.`);
  