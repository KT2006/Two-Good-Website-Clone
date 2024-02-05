function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveAnimation();
function videoIconAnim(){
    var icon= document.querySelector("#video-container");
var play = document.querySelector("#play");

icon.addEventListener("mouseenter",function(){
    gsap.to(play,{
        scale:1,
        opacity:1
    })
})
icon.addEventListener("mouseleave",function(){
    gsap.to(play,{
        scale:0,
        opacity:0
    })
})
icon.addEventListener("mousemove",function(dets){
    gsap.to(play,{
        left:dets.x-40,
        top:dets.y-30
    })
})

}
function navAnimation(){
    gsap.to("#nav1 svg",{
        transform:'translateY(-100%)',
        scrollTrigger:{
            trigger:'#page1',
            scroller:'#main',
            start:'top 0',
            end:'top -5%',
            scrub:true
        }
    })
    
    gsap.to("#nav2 #links",{
        opacity:0,
        transform:'translateY(-100%)',
        scrollTrigger:{
            trigger:'#page1',
            scroller:'#main',
            start:'top 0',
            end:'top -5%',
            scrub:true
        }
    })
}
 navAnimation();



videoIconAnim();
function loadingAnim(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.7,
        duration:.5,
        stagger:.18
    })
    gsap.from("#page1 #video-container",{
        y:100,
        opacity:0,
        delay:1.3,
        duration:.6,
    })
}
loadingAnim();
function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
          left: dets.x,
          top: dets.y,
        });
      });
      document.querySelector("#child1").addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            transform: 'translate(-50%,-50%) scale(1)',
            backgroundColor:"rgb(247, 242, 236)",
          })
      })
    
      document.querySelector("#child1").addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
          transform: 'translate(-50%,-50%) scale(0)'
        })
      })



      document.querySelector("#child2").addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            transform: 'translate(-50%,-50%) scale(1)',
            backgroundColor:"rgb(236, 236, 236)",
          })
      })
    
      document.querySelector("#child2").addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
          transform: 'translate(-50%,-50%) scale(0)'
        })
      })


      document.querySelector("#child3").addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            transform: 'translate(-50%,-50%) scale(1)',
            backgroundColor:"rgb(237, 230, 230)",
          })
      })
    
      document.querySelector("#child3").addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
          transform: 'translate(-50%,-50%) scale(0)'
        })
      })


      document.querySelector("#child4").addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            transform: 'translate(-50%,-50%) scale(1)',
            backgroundColor:"rgb(214, 224, 224)",
          })
      })
    
      document.querySelector("#child4").addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
          transform: 'translate(-50%,-50%) scale(0)'
        })
      })



    //   document.querySelectorAll(".child").forEach(function (elem) {
    //     elem.addEventListener("mouseenter", function () {
    //       gsap.to("#cursor", {
    //         transform: "translate(-50%,-50%) scale(1)",
    //         // backgroundColor:"rgb(236, 236, 236)"
    //       });
    //     });
    //     elem.addEventListener("mouseleave", function () {
    //       gsap.to("#cursor", {
    //         transform: "translate(-50%,-50%) scale(0)",
    //       });
    //     });
    //   });
}
cursorAnimation();

