const hero = document.querySelectorAll(".hero")
const buttons = document.querySelectorAll(".btn")
const link1 = document.querySelector('#link1')
const link2 = document.querySelector('#link2')
const link3 = document.querySelector('#link3')
const img1 = document.querySelector("#iphone1")
const img2 = document.querySelector("#iphone2")
const img3 = document.querySelector("#iphone3")
const heading = document.querySelector(".heading")
const head1 = document.querySelector("#head1")
const head2 = document.querySelector("#head2")
const head3 = document.querySelector("#head3")
const receive = document.querySelector(".receive")
const transfer = document.querySelector(".transfer")
const fund = document.querySelector(".fund")
const topButton = document.querySelector(".button")
const download = document.querySelector(".download")
const downloadLink = document.querySelector(".link")
const appstore2 = document.querySelector("#appstore2")
const playstore2 = document.querySelector("#playstore2")
const apps2 = document.querySelectorAll(".dld")
const navBar = document.querySelectorAll(".navbar")


$(function () {
    $(document).scroll(function () {
        const $nav = $(".navbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

// download.addEventListener("click", () => {
//      for (let apps of apps2) {
//         apps.classList.add("animate")
//         setTimeout(() => {
//             apps.classList.remove("animate")
//         }, 2100)
//      }
// })

// for(let button of buttons){
//     button.classList.add("clicked")
//     setTimeout(() => {
//         button.classList.remove('clicked');
//     }, 1600)
//     if(link2.classList.contains("clicked")){
//         img1.style.display = "none"
//         img2.style.display = "unset"
//         img3.style.display = "none"
    
//         receive.style.display = "none"
//         transfer.style.display = "unset"
//         fund.style.display = "none"
//     } 
//     if(link3.classList.contains("clicked")){
//         img1.style.display = "none"
//         img2.style.display = "none"
//         img3.style.display = "unset"

//         receive.style.display = "none"
//         transfer.style.display = "none"
//         fund.style.display = "unset"
//     } 
//     if(link1.classList.contains("clicked")){
//         img1.style.display = "unset"
//         img2.style.display = "none"
//         img3.style.display = "none"
    
//         receive.style.display = "unset"
//         transfer.style.display = "none"
//         fund.style.display = "none"
//     }  
// }
function showReceive() {
    img1.style.display = "unset"
    img2.style.display = "none"
    img3.style.display = "none"

    receive.style.display = "unset"
    transfer.style.display = "none"
    fund.style.display = "none"
}
function showTransfer() {
    img1.style.display = "none"
    img2.style.display = "unset"
    img3.style.display = "none"
        
    receive.style.display = "none"
    transfer.style.display = "unset"
    fund.style.display = "none"
}
function showFund(){
    img1.style.display = "none"
    img2.style.display = "none"
    img3.style.display = "unset"

    receive.style.display = "none"
    transfer.style.display = "none"
    fund.style.display = "unset"
}
function switchState(){
    setTimeout(() => {
        link1.classList.remove('clicked');
        link2.classList.add('clicked');
        if(link1.classList.contains("clicked")){
            showReceive()
        } 
        if(link2.classList.contains("clicked")){
            showTransfer()
        } 
    }, 2000)
    setTimeout(() => {
        link2.classList.remove('clicked');
        link3.classList.add('clicked');
        if(link2.classList.contains("clicked")){
            showTransfer()
        } 
        if(link3.classList.contains("clicked")){
            showFund()
        }  
    }, 4000)
}
buttons.forEach(active => {
    active.addEventListener("click", () => {
        document.querySelector('.clicked')?.classList.remove('clicked')
        active.classList.add('clicked') 
        if(link1.classList.contains("clicked")){
            showReceive()
        } 
        if(link2.classList.contains("clicked")){
            showTransfer()
        } 
        if(link3.classList.contains("clicked")){
            showFund()
        }  
    })
     
})


// for(let button of buttons){
//     button.addEventListener("click", () => {
//         document.querySelector('.clicked')?.classList.remove('clicked')
//         active.classList.add('clicked') 
//     })
// }


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-hero');
            setTimeout(() => {
                entry.target.classList.add('show-button');
            }, 1600)
        }
    })
})
const hiddenElements = document.querySelectorAll('.hero');
hiddenElements.forEach((el) => observer.observe(el))

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-ft');
            // switchState()
        } else{
            entry.target.classList.remove('show-ft');
        }
    })
})
const hiddenElements2 = document.querySelectorAll('.ft-cont');
hiddenElements2.forEach((el) => observer2.observe(el))

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-bvn');
        } else{
            entry.target.classList.remove('show-bvn');
        }
    })
})
const hiddenElements3 = document.querySelectorAll('.bvnbox');
hiddenElements3.forEach((el) => observer3.observe(el))

const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-otp');
        } else{
            entry.target.classList.remove('show-otp');
        }
    })
})
const hiddenElements4 = document.querySelectorAll('.otpbox');
hiddenElements4.forEach((el) => observer4.observe(el))

const observer5 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-pin');
        } else{
            entry.target.classList.remove('show-pin');
        }
    })
})
const hiddenElements5 = document.querySelectorAll('.pinbox');
hiddenElements5.forEach((el) => observer5.observe(el))

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
            downloadLink.href = ""
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
  
  // Example usage:
  const deviceType = isIOSorAndroid();
  console.log(`This device is running ${deviceType}.`);
  