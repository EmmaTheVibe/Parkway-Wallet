const download = document.querySelector(".download")
const downloadLink = document.querySelector(".link")

function isIOSorAndroid() {
    const userAgent = navigator.userAgent.toLowerCase();
    downloadLink.addEventListener ("click", () =>{
        if (/android/.test(userAgent)) {
            downloadLink.href = "https://play.google.com/store/apps/details?id=com.parkway.yurwallet"
            return 'Android';
        } else if (/iphone|ipad|ipod/.test(userAgent)) {
            downloadLink.href = "https://apps.apple.com/app/parkway-wallet/id6451072719/"
            return 'iOS';
        } else {
            downloadLink.href = "../landing page.html#download-box"
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
  