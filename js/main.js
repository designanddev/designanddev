//Gsap Flip
//gsap.registerPlugin(Flip);


gsap.to('.overlay .line', 1.5, {
    width: "0%",
    delay: 0.5,
    ease: Expo.easeInOut
});
gsap.to('.splash', 1.5, {
    y: "-1000%",
    delay: 1.8,
    ease: Expo.easeInOut
});
gsap.to('.one', 1.5, {
    y: "-150%",
    delay: 2,
    ease: Expo.easeInOut
});
gsap.to('.two', 1.5, {
    y: "150%",
    delay: 2,
    ease: Expo.easeInOut
});
gsap.to('.logo_loader', 1.5, {
    delay: 1.5,
    opacity: 0,
    y: -200,
    ease: Expo.easeInOut
})
gsap.to('.overlay .line', 1, {
    opacity: 0,
    delay: 1.4,
    ease: Expo.easeInOut
});
gsap.to('.overlay', 1.5, {
    display: "none",
    delay: 2.2,
    ease: Expo.easeInOut
});
// gsap.from('.logo', 1.5, {
//     delay: 2.8,
//     opacity: 0,
//     y: -20,
//     ease: Expo.easeInOut
// });
// gsap.from('.menu', 1.5, {
//     delay: 3.0,
//     opacity: 0,
//     y: -20,
//     ease: Expo.easeInOut
// });

//const heroHeading = new SplitType('#heroHeading');

gsap.to('.imgContainer', {
    scrollTrigger: {
        trigger: ".imageAnimations",
        start: "top top",
        scrub: 2,
        pin: ".imageAnimations",
    },
    width: "100%",
    ease: "Expo.easeInOut"
})

//menu onclick
const menuButton = document.getElementById("menuButton");
const menuList = document.getElementById("menuList");
const designServices = document.getElementById("designServices");
const menuservice = document.getElementById("menuservice");
const menuClose = document.getElementById("menuClose");
const menubg = document.getElementById("menubg");

window.onload = function () {
    menuList.className = "fixed w-full top-0 z-10 hidden"
};

menuButton.onclick = function () {
    menuList.classList.remove('hidden');
    gsap.from("#menuservice", 0.5, {
        y: -1000,
        ease: Expo.easeInOut
    })
    gsap.from("#designServices", 0.5, {
        y: -1000,
        delay: 0.3,
        ease: Expo.easeInOut
    })
    gsap.from("#menubg", 0.5, {
        x: -2000,
        delay: 0.4,
        ease: Expo.easeInOut
    })
    TweenMax.staggerFrom('#designServices ul li', 1, {
        delay: 0.5,
        opacity: 0,
        y: -20,
        ease: Expo.easeInOut
    }, 0.08)
    TweenMax.staggerFrom('#menuservice ul li', 1, {
        delay: 0.2,
        opacity: 0,
        y: -20,
        ease: Expo.easeInOut
    }, 0.08)
}

menuClose.onclick = function () {
    let d = gsap.to('#designServices', 2.0, {
        y: "300%",
        delay: 0.6,
        rotation: 60,
        ease: "bounce",
        onComplete:function(){
          d.revert();
        }
        
    });
     let m = gsap.to('#menuservice', 2.0, {
        y: "300%",
        delay: 0.6,
        rotation: 60,
        ease: "bounce",
         onComplete:function(){
          m.revert();
        }
       
    });
    //    menuList.classList.add('hidden');
    let l = gsap.to("#menubg", 1.5, {
        x: 2000,
        delay: 0.9,
        ease: Expo.easeInOut,
        onComplete: function () {
            l.revert();
            menuList.classList.add('hidden');
        }
    });

     
}

menubg.onclick = function () {
   let d = gsap.to('#designServices', 2.0, {
        y: "300%",
        delay: 0.6,
        rotation: 60,
        ease: "bounce",
        onComplete:function(){
          d.revert();
        }
        
    });
     let m = gsap.to('#menuservice', 2.0, {
        y: "300%",
        delay: 0.6,
        rotation: 60,
        ease: "bounce",
         onComplete:function(){
          m.revert();
        }
       
    });
    //    menuList.classList.add('hidden');
    let l = gsap.to("#menubg", 1.5, {
        x: 2000,
        delay: 0.9,
        ease: Expo.easeInOut,
        onComplete: function () {
            l.revert();
            menuList.classList.add('hidden');
        }
    });
     
}
