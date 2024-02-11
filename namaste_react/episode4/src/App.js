import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// MAIN COMPONENT (APPLAYOUT)
const AppLayout = () => {
    return (
        <div className="app border-white border-2 border-solid">
            <Header />
            <Body />
        </div>
    )
};

// TARGETING THE ROOTELEMENT
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// RENDER THE APPLAYOUT
rootElement.render(<AppLayout />);

setTimeout(() => {

    let right1 = document.getElementById('slideRight1');
    right1.onclick = function () {
        console.log('right slide clicked');
        let container1 = document.getElementById('section1ImageBox');
        sideScroll(container1, 'right', 10, 435, 5);
    };

    let left1 = document.getElementById('slideLeft1');
    left1.onclick = function () {
        console.log('left slide clicked');
        let container1 = document.getElementById('section1ImageBox');
        sideScroll(container1, 'left', 10, 435, 5);
    };
    let right2 = document.getElementById('slideRight2');
    right2.onclick = function () {
        console.log('right slide clicked');
        let container1 = document.getElementById('section2ImageBox');
        sideScroll(container1, 'right', 30, 540, 50);
    };

    let left2 = document.getElementById('slideLeft2');
    left2.onclick = function () {
        console.log('left slide clicked');
        let container1 = document.getElementById('section2ImageBox');
        sideScroll(container1, 'left', 30, 540, 50);
    };

    function sideScroll(element, direction, speed, distance, step) {
        scrollAmount = 0;
        let slideTimer = setInterval(function () {
            if (direction == 'left') {
                element.scrollLeft -= step;
            } else {
                element.scrollLeft += step;
            }
            scrollAmount += step;
            if (scrollAmount >= distance) {
                window.clearInterval(slideTimer);
            }
        }, speed);
    }
}, 1000);