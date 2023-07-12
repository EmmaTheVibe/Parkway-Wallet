const buttons = document.querySelectorAll(".btn")
buttons.forEach(active => {
    const link1 = document.querySelector('#link1')
    const link2 = document.querySelector('#link2')
    const link3 = document.querySelector('#link3')
    const img1 = document.querySelector("#iphone1")
    const img2 = document.querySelector("#iphone2")
    const img3 = document.querySelector("#iphone3")
    active.addEventListener("click", () => {
        document.querySelector('.clicked')?.classList.remove('clicked')
        active.classList.add('clicked') 
         
        if(link2.classList.contains("clicked")){
            img1.style.display = "none"
            img2.style.display = "unset"
            img3.style.display = "none"
    
            const transferText = document.querySelector(".heading")
            transferText.innerText = "Transfer Money"
            
            const transferPrg = document.querySelector(".prg")
            transferPrg.innerText = "No more worries about delayed or failed transactions. Parkway Wallet enables you to send money effortlessly to any bank of your choice. With just a few taps, you can transfer funds quickly and safely, allowing you to fulfil your financial obligations without any hassles. Enjoy peace of mind knowing that your transactions are completed smoothly and promptly."
        } else if(link3.classList.contains("clicked")){
            img1.style.display = "none"
            img2.style.display = "none"
            img3.style.display = "unset"
    
            const transferText = document.querySelector(".heading")
            transferText.innerText = "Fund Wallet"
            
            const transferPrg = document.querySelector(".prg")
            transferPrg.innerText = "Instantly top-up your wallet using your card, USSD codes, or a simple bank transfer. Parkway Wallet ensures that your funds are readily available whenever needed, enabling you to make seamless payments and enjoy uninterrupted services."
        } else if(link1.classList.contains("clicked")){
            img1.style.display = "unset"
            img2.style.display = "none"
            img3.style.display = "none"
            
            const transferText = document.querySelector(".heading")
            transferText.innerText = "Receive Money"
            
            const transferPrg = document.querySelector(".prg")
            transferPrg.innerText = "Say goodbye to complicated payment methods and delays. Now, you can easily receive money instantly from anyone, anywhere. Simplify your payment collection with Parkway Wallet using a unique account ID created."
        }  
    })
})

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