const formNextButtons = document.querySelectorAll(".form-btn[data-modal=next]");

formNextButtons.forEach(button => button.addEventListener("click", function (e){
    e.preventDefault();
    const form = this.closest("form");
    const currentStep = this.closest(".form-step");
    const {stepNumber: currentStepNumber} = currentStep.dataset;
    const allStepElements = form.querySelectorAll(".form-step");
    const nextStep = [...allStepElements].find(elem => {
        const {stepNumber} = elem.dataset;
        return ((stepNumber - currentStepNumber) === 1);
    })
    currentStep.classList.add("hide");
    nextStep.classList.remove("hide");

    const currentProgressBarStep = form.querySelector(".progress-bar-step.active");
    const progressBarSteps = form.querySelectorAll(".progress-bar-step");
    const index = [...progressBarSteps].findIndex(elem => elem === currentProgressBarStep);
    currentProgressBarStep.classList.add("done");
    currentProgressBarStep.classList.remove("active");
    progressBarSteps[index + 1].classList.add("active");

}))

const customSelects = document.querySelectorAll(".custom-select-selected");

customSelects.forEach(select => select.addEventListener("click", function(){
    this.classList.toggle("open");
    const options = this.closest(".custom-select").querySelector(".custom-select-items");
    options.classList.toggle("hide");
}));

const customSelectOptions = document.querySelectorAll(".custom-select-option");

customSelectOptions.forEach(option => option.addEventListener("click", function (){
    const text = this.textContent;
    const customSelect = this.closest(".custom-select");
    const selectOption = customSelect.querySelector(".custom-select-selected");
    selectOption.textContent = text;
    selectOption.classList.remove("open");
    const options = customSelect.querySelector(".custom-select-items");
    options.classList.add("hide");
}))