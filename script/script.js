// BG Parallax

const translate = document.querySelectorAll(".background");
const translate2 = document.querySelectorAll(".background2");

window.addEventListener('scroll', () => {
    let scroll = -window.pageYOffset;

    translate.forEach(element => {
        let speed = element.dataset.speed;

        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    translate2.forEach(element => {
        let speed = element.dataset.speed;

        element.style.transform = `translateY(${scroll * speed}px)`;
    });
});





// Fixed Scroll nav
window.addEventListener('scroll', navScroll);


const moveItem = document.querySelector('nav');
const moveItemsOffset = offset(moveItem).top;

let scrollActives = document.querySelectorAll('.scrollActive');
let scrollMoveLinks = document.querySelectorAll('.moveLink');

function navScroll() {

    if (pageYOffset == moveItemsOffset || pageYOffset > moveItemsOffset) {
        moveItem.classList.add('navActive');
        document.querySelector('.aboutUs').classList.add('aboutUsActive');

    } else {
        if (document.querySelector('.menu__menu').classList.contains('menu__menuActive') == false) {
            moveItem.classList.remove('navActive');
            document.querySelector('.aboutUs').classList.remove('aboutUsActive');
        }
    }

    for (let index = 0; index < scrollActives.length; index++) {

        const scrollActive = scrollActives[index];
        const scrollMoveLink = scrollMoveLinks[index];
        const scrollMoveLinkLast = scrollMoveLinks[index - 1];
        const scrollMoveLinkNew = scrollMoveLinks[index + 1];
        const scrollActiveOffset = offset(scrollActive).top;

        if (pageYOffset == scrollActiveOffset || pageYOffset > scrollActiveOffset) {
            if (index == 0) {
                scrollMoveLink.classList.add('activeLink');
                scrollMoveLinkNew.classList.remove('activeLink');
            } else if (index > 0 && index < 5) {
                scrollMoveLink.classList.add('activeLink');
                scrollMoveLinkLast.classList.remove('activeLink');
                scrollMoveLinkNew.classList.remove('activeLink');
                if (index == 3) {
                    if (scrollMoveLinks[5].classList.contains('activeLink')) {
                        scrollMoveLinks[5].classList.remove('activeLink');
                    }
                }
                if (index == 4) {
                    scrollMoveLinkNew.classList.add('activeLink');
                }
            }
        }

    }



}



//Animation
window.addEventListener('scroll', animOnScroll);

const animItems = document.querySelectorAll('.anim-items');

function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('active');
        }
    }



}
setTimeout(() => {
    animOnScroll();
}, 200);

function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
    }
}



// Slider

$(document).ready(function () {
    $('.slider__slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        infinite: false,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        waitForAnimate: false,
        centerMode: true,
        variableWidth: true
    });
});



// Menu burger

let counter = 0;

document.querySelector('.menu-btn').addEventListener("click", function () {

    for (let index = 0; index < 1; index++) {
        if (counter == 0) {
            this.classList.add('active');
            document.querySelector('.menu__menu').classList.add('menu__menuActive');
            document.querySelector('nav').classList.add('navActive');
            counter++;

        } else {
            this.classList.remove('active');
            document.querySelector('.menu__menu').classList.remove('menu__menuActive');

            if (pageYOffset < moveItemsOffset) {
                document.querySelector('nav').classList.remove('navActive');
                console.log(1);
            }
            counter--;
        }
    }

});


let arr = document.querySelectorAll('.moveLink');
for (let index = 0; index < arr.length; index++) {
    arr[index].addEventListener("click", function () {
        document.querySelector('.menu__menu').classList.remove('menu__menuActive');
        document.querySelector('.menu-btn').classList.remove('active');
        counter--;
    });
}

// Back button

const backScrollButton = document.querySelector('.fixedButton');

backScrollButton.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
});

window.addEventListener('scroll', backButton);

function backButton() {
    let number = document.documentElement.scrollTop;
    if (number > 500) {
        backScrollButton.style.opacity = 1;
    } else if (number < 500) {
        backScrollButton.style.opacity = 0;
    }
}