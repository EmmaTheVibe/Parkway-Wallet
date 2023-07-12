const buttons = document.querySelectorAll(".btn")
const link1 = document.querySelector('#link1')
const link2 = document.querySelector('#link2')
const link3 = document.querySelector('#link3')
const img1 = document.querySelector("#iphone1")
const img2 = document.querySelector("#iphone2")
const img3 = document.querySelector("#iphone3")
const heading = document.querySelector(".heading")
const receive = document.querySelector(".receive")
const transfer = document.querySelector(".transfer")
const fund = document.querySelector(".fund")

buttons.forEach(active => {
    active.addEventListener("click", () => {
        document.querySelector('.clicked')?.classList.remove('clicked')
        active.classList.add('clicked') 
        if(link2.classList.contains("clicked")){
            img1.style.display = "none"
            img2.style.display = "unset"
            img3.style.display = "none"
        
            heading.innerText = "Transfer Money"
            receive.style.display = "none"
            transfer.style.display = "unset"
            fund.style.display = "none"
        } 
        if(link3.classList.contains("clicked")){
            img1.style.display = "none"
            img2.style.display = "none"
            img3.style.display = "unset"
        
            heading.innerText = "Fund Wallet"
            receive.style.display = "none"
            transfer.style.display = "none"
            fund.style.display = "unset"
        } 
        if(link1.classList.contains("clicked")){
            img1.style.display = "unset"
            img2.style.display = "none"
            img3.style.display = "none"
        
            heading.innerText = "Receive Money"
            receive.style.display = "unset"
            transfer.style.display = "none"
            fund.style.display = "none"
        }  
    })
     
})
// link1.addEventListener("click", () => {
//     img1.style.display = "unset"
//     img2.style.display = "none"
//     img3.style.display = "none"

//     // heading.innerText = "Receive Money"
//     receive.style.display = "unset"
//     transfer.style.display = "none"
//     fund.style.display = "none"
// })
// link2.addEventListener("click", () => {
//     img1.style.display = "none"
//     img2.style.display = "unset"
//     img3.style.display = "none"
        
//     // heading.innerText = "Transfer Money"
//     receive.style.display = "none"
//     transfer.style.display = "unset"
//     fund.style.display = "none"
// })
// link3.addEventListener("click", () => {
//     img1.style.display = "none"
//     img2.style.display = "none"
//     img3.style.display = "unset"
        
//     heading.innerText = "Fund Wallet"
//     receive.style.display = "none"
//     transfer.style.display = "none"
//     fund.style.display = "unset"
// })


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
        } else{
            entry.target.classList.remove('show-hero');
        }
    })
})
const hiddenElements = document.querySelectorAll('.hero');
hiddenElements.forEach((el) => observer.observe(el))

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-ft');
        } else{
            entry.target.classList.remove('show-ft');
        }
    })
})
const hiddenElements2 = document.querySelectorAll('.features');
hiddenElements2.forEach((el) => observer2.observe(el))

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-dt');
        } else{
            entry.target.classList.remove('show-dt');
        }
    })
})
const hiddenElements3 = document.querySelectorAll('.more-details');
hiddenElements3.forEach((el) => observer3.observe(el))