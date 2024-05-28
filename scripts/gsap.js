// GSAP animation for the top nav and header animation
// Navigation gsap animation start
gsap.from("#desknav",{
    y:-100,
    duration:1.5,
    opacity:0
})
// Navigatoin animation end
// TOP header gsap code start here
// animation for the left icons
let headerele = document.querySelectorAll(".header-right");
        let newheaderele = [];

        headerele.forEach((element) => {
            newheaderele.push(...element.children);
        });
        gsap.from(newheaderele, {
            // duration: 0.5,
            opacity: 0,
            stagger: 0.2,
        });
        let headerleft = document.getElementById("header-left")
        let newheaderleft = headerleft.children;
        gsap.from(newheaderleft,{
            opacity:0,
            y:20,
            duration:1.5,
            stagger:0.5
        })
// gsap for the scroll button
gsap.from("#scroller",{
    opacity:0,
    y:20,
    duration:1,
    delay:1.8
})
// GSAP animation for the text and image slider
gsap.from("#text-container", {
    transform:"translateX(-200%)",
    duration: 17,
    ease: "none",
    repeat: -1
});
// TOP header gsap code end here

// This GSAP Code for the Article Sections

// This is for the top artical section for the cards start here
let toparticalsection = document.querySelector("#toparticalsection")
let newtoparticalsection = toparticalsection.children;
const headertl = gsap.timeline({
    scrollTrigger:{
        scroller: "body",
        trigger: "#articalsection",
        end:"top 50%",
        scrub: 3,
    }
});
headertl.from(newtoparticalsection, {
    y: 20,
    opacity: 0,
    duration: 1.5,
    stagger: 1.1,
});
headertl.from("#cardsarticalsectin", {
    scale:0,
    opacity: 0,
    duration: 2,
    stagger: 1.1,
});
// This is for the top artical section for the cards end here

// This js code for the main section start here
let mainsectiontl = gsap.timeline({
    scrollTrigger:{
        scroller:"body",
        trigger:"#maincontainer",
        end:"top 50%",
        scrub:2
    }
})
mainsectiontl.from("#maincontainer",{
    scale:0.6,
    duration:1.5,
    opacity:0
})
// This js code for the main section end here

// This gsap code for the about us section start here
let aboutsection = document.querySelector("#aboutuscards")
let newaboutsection = aboutsection.children;
const aboutsectiontl = gsap.timeline({
    scrollTrigger:{
        scroller:"body",
        trigger:"#aboutsection",
        end:"top 50%",
        scrub: 5,
    }
})
aboutsectiontl.from(newaboutsection,{
    x:400,
    opacity:0,
    duration:1.5,
    stagger:1,
})
// This gsap code for the about us section end here

// This is for the top Plans & Pricing section start here
let planstop = document.querySelector("#plans-top")
let newplanstop = planstop.children;
const planstl = gsap.timeline({
    scrollTrigger:{
        scroller: "body",
        trigger: "#planssection",
        end:"top 50%",
        scrub: 3
    }
});
planstl.from(newplanstop, {
    y: 20,
    opacity: 0,
    duration: 1.5,
    stagger: 1.1,
});
planstl.from("#plans-cards", {
    scale:0,
    opacity: 0,
    duration: 2,
    stagger: 1.1,
});
// This is for the top Plans & Pricing section end here
// This gsap code for the about our team section start here
gsap.from("#aboutleft",{
    x:-300,
    opacity:0,
    duration:2,
    scrollTrigger:{
        scroller: "body",
        trigger: "#aboutteam",
        end:"top 50%",
        scrub: 3
    }
})
gsap.from("#aboutright",{
    x:300,
    opacity:0,
    duration:2,
    scrollTrigger:{
        scroller: "body",
        trigger: "#aboutteam",
        end:"top 50%",
        scrub: 3
    }
})
// This gsap code for the about our team section end here
// This gsap code for the FAQ scetion start here
gsap.from("#faqsection",{
    scale:0,
    opacity:0,
    duration:2,
    scrollTrigger:{
        scroller:"body",
        trigger:"#faqsection",
        end:"top 50%",
        scrub:2
    }
})
// This gsap code for the FAQ scetion end here