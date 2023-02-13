// Function to include HTML popup Code
const includePopup = () => {
    let html = `<div id="lightbox" class="lightbox-popup">
                    <span id="close" onClick="closePopup()"> <img id="popupClose" src="./assets/images/close.svg" alt=""></span>
                    <img id="leftArrow" src="./assets/images/left.svg" alt="">
                    <img id="rightArrow" src="./assets/images/right.svg" alt="">
                    <img id="lightBoxPopup" src="./assets/images/bg-5.jpg" alt="">
                </div>`;

    let popDiv = document.createElement("div");
    popDiv.innerHTML = html;
    document.body.insertBefore(popDiv, document.body.firstChild);
};

let img;
let current;

// Function to init Plugin
const imagePopupInit = (target) => {
    // Select All Images With Class Target
    img = document.getElementsByClassName(target);

    // Add Event Listener on all Select image
    for (let i = 0; i < img.length; i++) {
        // Add Pointer
        img[i].style.cursor = "pointer";

        // Add Event Listener
        img[i].addEventListener("click", () => {
            let lightBoxPopup = document.getElementById("lightBoxPopup");
            let lightBox = document.getElementById("lightbox");

            lightBoxPopup.src = img[i].src;
            lightBox.style.display = "block";
            checkArrow();
        });
    }

    includePopup();

    // Next Button
    const nextButton = document.getElementById("rightArrow");
    nextButton.addEventListener("click", nextImage);

    // Prev Button
    const prevButton = document.getElementById("leftArrow");
    prevButton.addEventListener("click", prevImage);
};

// Function to Close Popup
const closePopup = () => {
    let lightBoxPopup = document.getElementById("lightBoxPopup");
    let lightBox = document.getElementById("lightbox");

    lightBoxPopup.src = "";
    lightBox.style.display = "none";
};

// Function to Next Image
const nextImage = () => {
    let lightBoxPopup = document.getElementById("lightBoxPopup");

    getCurrentImage();
    current++;
    lightBoxPopup.src = img[current].src;
    checkArrow();
};

// Function to Prev Image
const prevImage = () => {
    let lightBoxPopup = document.getElementById("lightBoxPopup");

    getCurrentImage();
    current--;
    lightBoxPopup.src = img[current].src;
    checkArrow();
};

// Function to Get Current Images
const getCurrentImage = () => {
    let lightBoxPopup = document.getElementById("lightBoxPopup");

    for (let i = 0; i < img.length; i++) {
        if (img[i].src === lightBoxPopup.src) {
            current = i;
        }
    }
};

// Function to Check Arrow
const checkArrow = () => {
    getCurrentImage();
    if (current == "0") {
        document.getElementById("leftArrow").style.display = "none";
    } else if (current == img.length - 1) {
        document.getElementById("rightArrow").style.display = "none";
    } else {
        document.getElementById("leftArrow").style.display = "block";
        document.getElementById("rightArrow").style.display = "block";
    }
};
