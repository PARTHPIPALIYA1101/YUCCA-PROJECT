const locomotiveScroll = new LocomotiveScroll();

const section = document.querySelector(".sec3");
const boxes = document.querySelectorAll(".img-box");

const images = {
    3: "assets/images/yucca-packaging-agriculture-strawberry-blueberry-gooseberry-grapes-kiwi-avo.jpg",
    1: "assets/images/yucca-packaging-for-food-service-takeout-catering-deli-smoothies-coffee-desserts.jpg",
    2: "assets/images/yucca-packaging-meat-poultry-seafood-mince-steak-chicken-and-more.jpg"
};

section.style.backgroundImage = `url(${images[1]})`;

boxes.forEach(box => {
    box.addEventListener("mouseenter", () => {
        boxes.forEach(b => b.classList.remove("active-box"));
        const id = box.getAttribute("box-get");
        section.style.backgroundImage = `url(${images[id]})`;
        box.classList.add("active-box");
    });
});

/* FAQ accordion — single open at a time */
const faqItems = document.querySelectorAll(".s8-r-item");

faqItems.forEach(item => {
    const header = item.querySelector(".s8-r-main");
    header.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        faqItems.forEach(i => i.classList.remove("open"));
        if (!isOpen) item.classList.add("open");
    });
});

/* Mobile navigation toggle */
const navToggle = document.querySelector(".nav-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", () => {
        const open = navToggle.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", open);
        mobileMenu.style.maxHeight = open ? mobileMenu.scrollHeight + "px" : "0";
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navToggle.classList.remove("open");
            navToggle.setAttribute("aria-expanded", "false");
            mobileMenu.style.maxHeight = "0";
        });
    });
}