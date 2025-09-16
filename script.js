let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

if (menu && navbar) {
    menu.onclick = () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    };
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
    if (menu) menu.classList.remove('fa-times');
    if (navbar) navbar.classList.remove('active');

    sections.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                let activeLink = document.querySelector(`header .navbar a[href*=${id}]`);
                if (activeLink) activeLink.classList.add('active');
            });
        }
    });
};

// Search form toggle
let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('#search-form');
let closeBtn = document.querySelector('#close');

if (searchIcon && searchForm) {
    searchIcon.onclick = () => {
        searchForm.classList.toggle('active');
    };
}

if (closeBtn && searchForm) {
    closeBtn.onclick = () => {
        searchForm.classList.remove('active');
    };
}

// Swiper slider
if (typeof Swiper !== "undefined") {
    var swiper = new Swiper(".home-slider", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
    });
}

// Calculate order total
let total = 0;

let quantity1 = document.querySelector('#quantity1');
let quantity2 = document.querySelector('#quantity2');
let order = document.querySelector('#Order');
let addlOrder = document.querySelector('#AddlOrder');
let cartValue = document.querySelector('#cartValue');

function calculateTotal() {
    total = 0; // Reset before recalculating

    if (order) {
        let value1 = parseFloat(order.value) || 0;
        let q1 = parseInt(quantity1?.value) || 0;
        total += value1 * q1;
    }

    if (addlOrder) {
        let value2 = parseFloat(addlOrder.value) || 0;
        let q2 = parseInt(quantity2?.value) || 0;
        total += value2 * q2;
    }

    if (cartValue) {
        cartValue.value = total.toFixed(2); // Show with 2 decimals
    }
}

// Attach event listeners if elements exist
if (quantity1) quantity1.onkeyup = calculateTotal;
if (order) order.onchange = calculateTotal;
if (quantity2) quantity2.onkeyup = calculateTotal;
if (addlOrder) addlOrder.onchange = calculateTotal;
