function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

function page1() {
    let page1 = document.querySelector("#page1  span ");
    page1.addEventListener("mouseenter", () => {
        gsap.to("#page1 h1 span svg", {
            rotate: "55",
            duration: "0.4",
            fontSize: "1vw"
        })
    })
    page1.addEventListener("mouseleave", () => {
        gsap.to("#page1 h1 span svg", {
            rotate: "-15"
        })
    })
    function copyText() {
        var copyText = document.getElementById("copyInput");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        alert("Copied the text: " + copyText.value);
    }

}
function navAnimation() {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.5
        })
        tl.to(".nav-part2 h5", {
            display: "block",
            duration: 0.1

        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            // duration:0.3,
            stagger: {
                amount: 0.5
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
}

function page2Animation() {
    var rightElems = document.querySelectorAll(".right-elem")

    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {




            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", function (dets) {

            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 90,
                y: dets.y - elem.getBoundingClientRect().y - 215
            })
        })
    })
}

function page3VideoAnimation() {
    var page3Center = document.querySelector(".page3-center")
    var video = document.querySelector("#page3 video")

    page3Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })


    var sections = document.querySelectorAll(".sec-right")

    sections.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
        })
        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load()
        })
    })

}

function page5animation() {
    let secRight = document.querySelectorAll(".secright");
    let rightVideo = document.querySelector(".secright video");
    let rightimg = document.querySelector(".secright img");


    secRight.forEach((elem) => {
        elem.addEventListener("mouseenter", () => {
            elem.childNodes[3].play();
            elem.childNodes[1].style.opacity = "0";
        })
        elem.addEventListener("mouseleave", () => {
            elem.childNodes[3].load();
            elem.childNodes[1].style.opacity = "1";
        })
    })
}
function page6Animation() {
    let page6lft = document.querySelector(".page6-lft");
    let page6lftVideo = document.querySelector(".page6-lft video");
    let page6lftp = document.querySelector(".page6-lft p");
    let page6right = document.querySelector(".page6-right");
    let page6rightVideo = document.querySelector(".page6-right video");
    let page6rightp = document.querySelector(".page6-right p");

    page6lft.addEventListener("mouseenter", () => {
        page6lftVideo.play()
        page6lftVideo.style.height = "430px"
        page6lftVideo.style.marginTop = "0px"
        page6lftp.style.opacity = "0"

    })
    page6lft.addEventListener("mouseleave", () => {
        page6lftVideo.load()
        page6lftVideo.style.height = "247px"
        page6lftVideo.style.marginTop = "188px"
        page6lftp.style.opacity = "1"
    })
    page6right.addEventListener("mouseenter", () => {
        page6rightVideo.play()
        page6rightVideo.style.height = "430px"
        page6rightVideo.style.marginTop = "0px"
        page6rightp.style.opacity = "0"

    })
    page6right.addEventListener("mouseleave", () => {
        page6lftVideo.load()
        page6rightVideo.style.height = "247px"
        page6rightVideo.style.marginTop = "188px"
        page6rightp.style.opacity = "1"
    })





}
function page7details() {

    let productdesign = document.querySelector(".product-design");
    let page7 = document.querySelector(".page7");
    let isToggled = true;
    let icon = document.querySelector(".fa-solid.fa-arrow-up");

    productdesign.addEventListener("click", () => {
        if (isToggled) {
            page7.style.height = "186vw";
            isToggled = false;
            icon.setAttribute('class', 'fa-solid fa-arrow-down');

        } else {
            page7.style.height = "141vw";
            isToggled = true;
            icon.setAttribute('class', 'fa-solid fa-arrow-up');
        }


    });
    gsap.from(".div2 h5,.div3 h5,.div4 h5", {
        x: 0,
        duration: 2,
        scrollTrigger: {
            trigger: ".div2 h5",
            scroller: "#main",
            // markers : "true",
            start: "top 80%",
            end: "top 10%",
            scrub: "true"
        }
    })
}
function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        // delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}


loadingAnimation()
locomotiveAnimation()
page1()
navAnimation()

page2Animation()

page3VideoAnimation()

page5animation()
page6Animation()
page7details()








