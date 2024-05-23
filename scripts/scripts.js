let main = document.querySelector(".main")
document.querySelector("#scroller").addEventListener("click",()=>{
    window.scrollTo({top: window.innerHeight, behavior: 'smooth'})
})