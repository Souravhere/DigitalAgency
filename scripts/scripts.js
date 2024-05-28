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

// This js code for the Swiper.js start here
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });
// This js code for the Swiper.js end here

// this gsap code for open and close the FAQ
let faqbtns = document.querySelectorAll(".openfaq");
let answers = document.querySelectorAll(".answer");

        faqbtns.forEach((faqbtn, index) => {
            faqbtn.addEventListener("click", () => {
                const answer = answers[index];

                answers.forEach((ans, ansIndex) => {
                    if (ansIndex !== index) {
                        gsap.to(ans, {height: 0, opacity: 0, duration: 0.5, onComplete: () => ans.classList.add("hidden")});
                        faqbtns[ansIndex].innerHTML = `<i class="ri-add-line"></i>`;
                    }
                });

                if (answer.classList.contains("hidden")) {
                    answer.classList.remove("hidden");
                    gsap.fromTo(answer, {height: 0, opacity: 0}, {height: "auto", opacity: 1, duration: 0.5});
                    faqbtn.innerHTML = `<i class="ri-subtract-line"></i>`;
                } else {
                    gsap.to(answer, {height: 0, opacity: 0, duration: 0.5, onComplete: () => answer.classList.add("hidden")});
                    faqbtn.innerHTML = `<i class="ri-add-line"></i>`;
                }
            });
        });