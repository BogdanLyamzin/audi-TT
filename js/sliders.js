const tuningSliderArrow = document.querySelectorAll(".tuning-slider-arrow");

const tunningSlidesContainer = document.querySelector(".tuning-slides");

tuningSliderArrow.forEach(arrow => arrow.addEventListener("click", function (e){
    e.preventDefault();
    const {target} = this.dataset;
    const translateStep = (target === "next") ? -372 : 372;
    const currentTransform = getTranslateX(tunningSlidesContainer);
    if(!currentTransform && target === "prev") {
        return tunningSlidesContainer.style.transform = `translate(${-tunningSlidesContainer.offsetWidth + translateStep}px)`;
    }

    if((currentTransform + translateStep) < -(tunningSlidesContainer.offsetWidth - 372)){
        return tunningSlidesContainer.style.transform = `translate(0px)`;;
    }

    tunningSlidesContainer.style.transform = `translate(${currentTransform + translateStep}px)`;
}))

const caseSliderArrow = document.querySelectorAll(".case-slider-arrow");

const caseSlidesContainer = document.querySelector(".case-slides");

caseSliderArrow.forEach(arrow => arrow.addEventListener("click", function (e){
    e.preventDefault();
    const {target} = this.dataset;
    const translateStep = (target === "next") ? -541 : 541;
    const currentTransform = getTranslateX(caseSlidesContainer);
    if(!currentTransform && target === "prev") {
        return caseSlidesContainer.style.transform = `translate(${-caseSlidesContainer.offsetWidth + translateStep}px)`;
    }

    if((currentTransform + translateStep) < -(caseSlidesContainer.offsetWidth - 541)){
        return caseSlidesContainer.style.transform = `translate(0px)`;;
    }

    caseSlidesContainer.style.transform = `translate(${currentTransform + translateStep}px)`;
}))

const reviewsSliderArrow = document.querySelectorAll(".reviews-slider-arrow");

const reviewsSlidesContainer = document.querySelector(".reviews-slides");

reviewsSliderArrow.forEach(arrow => arrow.addEventListener("click", function (e){
    e.preventDefault();
    const {target} = this.dataset;

    const steps = reviewsSlidesContainer.children.length;
    const currentStep = this.closest(".reviews-slider").querySelector(".reviews-slider-day");
    const currentStepNumber = +currentStep.textContent;

    if(target === "next"){
        if(currentStepNumber < 3) {
            currentStep.textContent = `0${currentStepNumber + 1}`;
        }
        else {
            currentStep.textContent = `01`;
        }
    }
    if(target === "prev") {
        if(currentStepNumber > 1) {
            currentStep.textContent = `0${currentStepNumber - 1}`;
        }
        else {
            currentStep.textContent = `03`;
        }
    }

    const translateStep = (target === "next") ? -500 : 500;
    const currentTransform = getTranslateX(reviewsSlidesContainer);
    if(!currentTransform && target === "prev") {
        return reviewsSlidesContainer.style.transform = `translate(${-reviewsSlidesContainer.offsetWidth + translateStep}px)`;
    }

    if((currentTransform + translateStep) < -(reviewsSlidesContainer.offsetWidth - 500)){
        return reviewsSlidesContainer.style.transform = `translate(0px)`;;
    }

    reviewsSlidesContainer.style.transform = `translate(${currentTransform + translateStep}px)`;
}))

function getTranslateX(element) {
    const style = window.getComputedStyle(element);
    const matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m41;
}