// Cursor
const cursorTag = document.querySelector(".cursor");
const ball = cursorTag.querySelector("div");

let currentX = 0;
let currentY = 0;
let aimX = 0;
let aimY = 0;
let speed = 0.1;

const animate = function() {
  currentX += (aimX - currentX) * speed;
  currentY += (aimY - currentY) * speed;
  ball.style.left = currentX + "px"
  ball.style.top = currentY + "px"

  requestAnimationFrame(animate);

}

animate();

document.addEventListener("mousemove", function(event) {
  aimX = event.pageX;
  aimY = event.pageY;
});

// Show Caption on img hover
const allImgs = document.querySelectorAll(".imghover");
let cursorTxt = ball.querySelector("span");

allImgs.forEach(img => {
  img.addEventListener("mouseenter", function(event) {
    
   let imgTitle = img.alt.slice(0,20);
   if (img.alt.length > 21) {
     imgTitle += "...";
   }
   cursorTxt.innerText = imgTitle;

   cursorTxt.style.display = "block";
    
  });

  img.addEventListener("mouseleave", function(event) {
    cursorTxt.style.display = "none";     
   })
});


const imgHover = function() {
// Show img on project-overview hover
let projItems = document.querySelectorAll(".project-overview__list__item")

projItems.forEach(projItem => {
  let projImg = projItem.querySelector("img");

  projItem.addEventListener("mouseenter", function(event) {
    
    projImg.classList.add("img-visible");

  });

  projItem.addEventListener("mouseleave", function(event) {
    projImg.classList.remove("img-visible");

  })

});

}

imgHover();

// ##########################################################
// Scrolling
gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector(".scroll-container");

/* SMOOTH SCROLL */
const scroller = new LocomotiveScroll({
  el: pageContainer,
  smooth: true
});


const scrollToPage = function(pageId) {

 if (window.location.pathname == "/") {
  const target = document.querySelector("#" + pageId);
  scroller.scrollTo(target);

 } else {
 
 // window.location.href = "/";
  window.location.assign = "/";
  window.location.replace = "/";

  const target = document.querySelector("#" + pageId);
  scroller.scrollTo(target);
 

 }
 
 return false;

  
}


scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContainer, {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: pageContainer.style.transform ? "transform" : "fixed"
});

////////////////////////////////////
////////////////////////////////////
window.addEventListener("load", function () {
  let pinBoxes = document.querySelectorAll(".pin-wrap > *");
  let pinWrap = document.querySelector(".pin-wrap");
  let pinWrapWidth = pinWrap.offsetWidth;
  let horizontalScrollLength = pinWrapWidth - window.innerWidth;

  // Pinning and horizontal scrolling

  gsap.to(".pin-wrap", {
    scrollTrigger: {
      scroller: pageContainer, //locomotive-scroll
      scrub: true,
      trigger: "#sectionPin",
      pin: true,
      // anticipatePin: 1,
      start: "top top",
      end: pinWrapWidth
    },
    x: -horizontalScrollLength,
    ease: "none"
  });

  ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

  ScrollTrigger.refresh();
});


// ######################################################################
// Menu
const menuWrapper = document.querySelector(".menuWrapper")
const hamburger = document.querySelector(".hamburger")
const fsMenu = document.querySelector(".fullscreen-menu")
const menuItems = document.querySelectorAll(".fullscreen-menu__item")

if (window.location.pathname != "/") {
  menuWrapper.style.display = "none";
} else {
  menuWrapper.style.display = "block";
}

hamburger.addEventListener("click", function(event) {

    // Menu already open -> close it
    if (hamburger.classList.contains("checked")) {
        hamburger.classList.remove("checked");
        fsMenu.classList.remove("open");
    } else {
        hamburger.classList.add("checked");
        fsMenu.classList.add("open");

        menuItems.forEach(menuItem => {
            const link = menuItem.querySelector("a");

            if (window.location.href == link.href) {
               link.style.textDecoration = "line-through";
            } else {
                link.style.textDecoration = "none";
            }
        });
       
    }
})

menuItems.forEach(menuItem => {
    const link = menuItem.querySelector("a");
    link.addEventListener("click", function(event) {
        hamburger.classList.remove("checked");
        fsMenu.classList.remove("open");
    })
});