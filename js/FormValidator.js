class FormValidator {
    constructor() {

    }
    checkInputValidity(elementInput,elementError) {

        if (elementInput.value.length < 1) {
            elementError.textContent = 'Это обязательное поле';
            elementError.style.opacity = '1';
            return false;
        } else if (elementInput.value.length < 2 || elementInput.value.length > 30) {
            elementError.textContent = 'Должно быть от 2 до 30 символов'
            elementError.style.opacity = '1';
            return false;
        } else {
            elementError.style.opacity = '0';
            return true;
        }
    }
    setSubmitButtonState(condition,elementButton){
        if (condition) {
            elementButton.style.backgroundColor = 'black'
            elementButton.style.color = 'white'
            elementButton.removeAttribute("disabled")
        } else {
            elementButton.style.backgroundColor = 'white'
            elementButton.style.color = 'rgba(0, 0, 0, .2)'
            elementButton.setAttribute("disabled", '');

        }
    }
    setEventListeners(event){
        const condition = this.checkInputValidity(event.target, event.target.nextElementSibling);
        const elementButton = event.currentTarget.lastElementChild;
        this.setSubmitButtonState(condition, elementButton)
    }
}

