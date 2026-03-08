const locomotiveScroll = new LocomotiveScroll();

const section = document.querySelector(".sec3");
const boxes = document.querySelectorAll(".img-box");

const images = {
    3: "https://yucca.co.za/wp-content/uploads/2025/11/yucca-packaging-agriculture-strawberry-blueberry-gooseberry-grapes-kiwi-avo.jpg",
    1: "https://yucca.co.za/wp-content/uploads/2025/09/yucca-packaging-for-food-service-takeout-catering-deli-smoothies-coffee-desserts.jpg",
    2: "https://yucca.co.za/wp-content/uploads/2025/09/yucca-packaging-meat-poultry-seafood-mince-steak-chicken-and-more.jpg"
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