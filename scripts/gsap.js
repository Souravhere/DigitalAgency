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
gsap.from("#headeranileft",{
    x:-200,
    duration:2,
    opacity:0,
    rotate:"180deg"
})
// animation for the right icons
gsap.from("#headeraniright",{
    x:200,
    duration:2,
    opacity:0,
    rotate:"180deg"
})
// gsap for the header text
let midheadertext = document.querySelector("#mid-header")
let newmidheadertext = midheadertext.children;
gsap.from(newmidheadertext,{
    opacity:0,
    y:20,
    duration:1.7,
    stagger:0.4
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