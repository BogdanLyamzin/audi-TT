const elements = document.querySelectorAll("[data-toggle=scroll-to]")

elements.forEach(elem => elem.addEventListener("click", function(e){
   e.preventDefault();
    const {target, speed} = this.dataset;
    const element = document.querySelector(target);
    animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, (element.offsetTop - 100), speed, true);
    // const {top} = element.getBoundingClientRect();
    // window.scrollTo({
    //     top,
    //     behavior: "smooth"
    // });
}))

function animate(elem, style, unit, from, to, time, prop) {
    if (!elem) {
        return;
    }
    const start = new Date().getTime();
    const timer = setInterval(function () {
            var step = Math.min(1, (new Date().getTime() - start) / time);
            if (prop) {
                elem[style] = (from + step * (to - from))+unit;
            } else {
                elem.style[style] = (from + step * (to - from))+unit;
            }
            if (step === 1) {
                clearInterval(timer);
            }
        }, 25);
    if (prop) {
        elem[style] = from+unit;
    } else {
        elem.style[style] = from+unit;
    }
}

// window.onload = function () {
//     const target = document.getElementById("map");
//     animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop, 2000, true);
// };