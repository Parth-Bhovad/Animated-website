const page1Animation = () => {
    let tl = gsap.timeline()

    tl.from("nav h1,nav h4,nav button", {
        y: -50,
        opacity: 0,
        delay: 0.5,
        stagger: 0.2
    })


    tl.from(".center-part1 h1", {
        x: -300,
        opacity: 0,
        duration: 0.2,
    })

    tl.from(".center-part1 p", {
        x: -100,
        opacity: 0,
        duration: 0.2,
    })

    tl.from(".center-part1 button", {
        opacity: 0,
        duration: 0.2,
    })


    tl.from(".center-part2 img", {
        x: 100,
        opacity: 0,
        duration: 0.4,
    }, "-=0.6")

    tl.from(".section1Bottom img", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6
    })
}

page1Animation()


let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        scroller: "body",
        markers: true,
        start: "top 50%",
        end: "top 0",
        scrub: 5
    }
})

tl2.from(".services h3, .services p", {
    x: -100,
    opacity: 0,
    duration: 0.5,
    // scrollTrigger:{
    //     trigger:".services h3",
    //     scroller:"body",
    //     markers:true,
    //     start:"top 50%",
    //     scrub:5
    // }
})

tl2.from("#right1", {
    x: "-30",
    opacity: 0,
    duration: 1
}, "line1")

tl2.from("#left1", {
    x: "30",
    opacity: 0,
    duration: 1
}, "line1")

tl2.from("#right2", {
    x: "-30",
    opacity: 0,
    duration: 1
}, "line2")

tl2.from("#left2", {
    x: "30",
    opacity: 0,
    duration: 1
}, "line2")












const marqueAimation = () => {
    window.addEventListener("wheel", (e) => {
        if (e.deltaY > 0) {
            gsap.to(".marque", {
                transform: 'translateX(-100%)',
                duration: 5,
                ease: "none",
                repeat: -1
            })

            gsap.to(".marque img", {
                rotate: 180
            })

        } else if (e.deltaY < 0) {
            gsap.to(".marque", {
                transform: 'translateX(0)',
                duration: 5,
                ease: "none",
                repeat: -1
            })
            gsap.to(".marque img", {
                rotate: 0
            })
        }

    })
}

marqueAimation()