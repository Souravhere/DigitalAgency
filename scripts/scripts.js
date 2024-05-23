// This gsap code for the scroll button
let main = document.querySelector(".main")
document.querySelector("#scroller").addEventListener("click",()=>{
    window.scrollTo({top: window.innerHeight, behavior: 'smooth'})
})

// this js code for the mobile menu open and close
let mobilemenu = document.querySelector("#mobile-menu-display");
let mobilemenubtns = document.querySelectorAll(".mobile-menu-btn");

let isMenuOpen = false; // Track menu state

// Create a GSAP timeline for menu animation
const menuTl = gsap.timeline({ paused: true });

menuTl.to(mobilemenu, {
    duration: 0.5,
    x: "0%", 
    ease: "power2.inOut",
});
menuTl.from("#menu-li li", {
    duration: 0.8,
    x: "100",
    opacity:0,
    stagger:0.2,
    ease: "none"
});

// Add click event listeners to each button
mobilemenubtns.forEach(button => {
    button.addEventListener("click", () => {

        if (isMenuOpen) {
            menuTl.reverse();
        } else {
            menuTl.play(); 
        }
        
        isMenuOpen = !isMenuOpen;
    });
});
