const elements = document.querySelectorAll("[data-toggle=scroll-to]")

elements.forEach(elem => elem.addEventListener("click", function(e){
   e.preventDefault();
    const {target} = this.dataset;
    const element = document.querySelector(target);
    const {top} = element.getBoundingClientRect();
    window.scrollTo({
        top,
        behavior: "smooth"
    });
}))
