class Carousel {
    constructor(carouselElement) {
        // assign this.element to the element DOM reference
        this.carouselElement = carouselElement;

        // select all image elements
        this.carouselImg = document.querySelectorAll('.carousel .carousel-img');

        // select left arrow
        this.carouselLeft = document.querySelector('.carousel .left-btn');

        // add an event listener for left arrow
        this.carouselLeft.addEventListener('click', () => this.changeImg(-1));

        // select right arrow
        this.carouselRight = document.querySelector('.carousel .right-btn');

        // add an event listener for right arrow
        this.carouselRight.addEventListener('click', () => this.changeImg(1));

        // display default image
        this.carouselImg[currIdx].style.display = 'flex';
    }

    changeImg(dir) {
        // select all images
        const images = document.querySelectorAll('.carousel .carousel-img');

        // iterate through NodeList setting the display style each one to 'none'
        images.forEach(image => image.style.display = 'none');

        // change current index
        if (currIdx === 0 && dir === -1) {
            currIdx = images.length-1;
        } else if (currIdx === images.length-1 && dir === 1) {
            currIdx = 0;
        } else {
            currIdx += dir;
        }

        // show newly selected image
        images[currIdx].style.display = 'flex';
    }
}

let carousel = document.querySelector('.carousel');
let currIdx = 0;

carousel = new Carousel(carousel);