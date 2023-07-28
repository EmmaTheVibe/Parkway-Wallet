const downloadP = document.querySelector(".download")
const downloadLinkP = document.querySelector(".link")

function isIOSorAndroid() {
    const userAgent = navigator.userAgent.toLowerCase();
    downloadLinkP.addEventListener ("click", () =>{
        if (/android/.test(userAgent)) {
            downloadLinkP.href = "https://play.google.com/store/apps/details?id=com.parkway.yurwallet"
            return 'Android';
        } else if (/iphone|ipad|ipod/.test(userAgent)) {
            downloadLinkP.href = "https://apps.apple.com/app/parkway-wallet/id6451072719/"
            return 'iOS';
        } else {
            downloadLinkP.href = "../landing page.html#download-box"
            return 'Unknown';
        }
    })
  
    if (/android/.test(userAgent)) {
      return 'Android';
    } else if (/iphone|ipad|ipod/.test(userAgent)) {
      return 'iOS';
    } else {
      return 'Unknown';
    }
}
  const deviceType = isIOSorAndroid();
  console.log(`This device is running ${deviceType}.`);
  