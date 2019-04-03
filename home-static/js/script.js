
const feature_carousel = new Siema ({
    selector: '.feature-carousel',
    duration: 200,
    easing: 'ease-out',
    perPage: 3,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: true,
    rtl: false,
    perPage: {
        1024: 1,
        1025: 3
    },
});

document.getElementById('left-arrow').addEventListener('click', () => feature_carousel.prev());
document.getElementById('right-arrow').addEventListener('click', () => feature_carousel.next())

// const upfold_carousel = new Siema ({
//     selector: '.upfold-carousel',
//     duration: 200,
//     easing: 'ease-out',
//     perPage: 3,
//     startIndex: 0,
//     draggable: true,
//     multipleDrag: true,
//     threshold: 20,
//     loop: true,
//     rtl: false,
//     perPage: {
//         1025: 1
//     },
// });