class Carousel {
    constructor(carouselElement) {
        // assign this.element to the element DOM reference
        this.carouselElement = carouselElement;

        // select all carousel objects
        this.carouselImg = document.querySelectorAll('.carousel .carousel-img');
        this.carouselInfo = document.querySelectorAll('.info .user');

        // select left arrow
        this.carouselLeft = document.querySelector('.carousel .left-btn');

        // add an event listener for left arrow
        this.carouselLeft.addEventListener('click', () => this.changeImg(-1));

        // select right arrow
        this.carouselRight = document.querySelector('.carousel .right-btn');

        // add an event listener for right arrow
        this.carouselRight.addEventListener('click', () => this.changeImg(1));

        // display default objects
        this.carouselImg[currIdx].style.display = 'flex';
        this.carouselInfo[currIdx].style.display = 'block';
    }

    changeImg(dir) {
        // select all carousel objects
        const images = document.querySelectorAll('.carousel .carousel-img');
        const infos = document.querySelectorAll('.info .user');

        // iterate through NodeList setting the display style each one to 'none'
        images.forEach(image => image.style.display = 'none');
        infos.forEach(info => info.style.display = 'none');

        // change current index
        if (currIdx === 0 && dir === -1) {
            currIdx = images.length-1;
        } else if (currIdx === images.length-1 && dir === 1) {
            currIdx = 0;
        } else {
            currIdx += dir;
        }

        // show newly selected objects
        images[currIdx].style.display = 'flex';
        infos[currIdx].style.display = 'block';
    }
}

let carousel = document.querySelector('.about-page .carousel');
let info = document.querySelector('.about-page .info')
let currIdx = 0;

carousel = new Carousel(carousel);