class Popup {
    constructor(cardList,FormValidator,userInfo) {
        this.formValidator = FormValidator;
        this.cardList = cardList;
        this.userInfo = userInfo;
        this.popup =  document.querySelector('.popup');
        this.root = document.querySelector('.root');
        this.root.addEventListener('click', (event, ) => {
            if (event.target.classList.contains('place-card__image')) {
                this.imagePlace(event);
            };
            if (event.target.classList.contains('user-info__button')){
               this.formPlace();

            }
            if (event.target.classList.contains('user-info__edit-button')){
                this.formProfile();
            }
        });
        this.closeEsc();
        this.closeMouse();
    }
    open() {
        this.popup.classList.add('popup_is-opened');
    }
    close() {
        this.popup.classList.remove('popup_is-opened');
        this.popup.innerHTML = '';
    }
    closeEsc(){
        window.addEventListener('keydown', event => {
            if (event.key === `Escape`) {
                this.close(this.popup);
            }
        })
    }
    closeMouse(){
        this.popup.addEventListener('mousedown', event => {

            if (event.target === this.popup) {
                this.close(this.popup);
            }
        })
    }
    imagePlace(event){
    
        this.link = event.target.dataset.url
        const popupPictureClose = document.createElement('img');
        const popupImg = document.createElement('img')
        const popupPictureCont = document.createElement('div');

        popupPictureCont.classList.add('popup__picture-container')
        popupImg.classList.add('popup__picture');
        popupImg.setAttribute('src', `${this.link}`);
        popupPictureClose.classList.add('popup__close');
        popupPictureClose.setAttribute('src', `./images/close.svg`);

        this.popup.appendChild(popupPictureCont);
        popupPictureCont.appendChild(popupImg);
        popupPictureCont.appendChild(popupPictureClose);

        this.open();

        popupPictureClose.addEventListener('click', () => {
            this.close(this.popup);
        });
    }
    formPlace(){
       
        const popupContainer = document.createElement('div');
        const popupClose = document.createElement('img');
        const popupTitle = document.createElement('h3');
        const popupForm = document.createElement('form');
        const popupInputName = document.createElement('input');
        const popupInputLink = document.createElement('input');
        const popupButton = document.createElement('button');

        popupContainer.classList.add('popup__content');
        popupClose.classList.add('popup__close');
        popupClose.setAttribute('src','./images/close.svg');
        popupTitle.classList.add('popup__title');
        popupTitle.textContent = 'Новое место';
        popupForm.classList.add('popup__form');
        popupForm.setAttribute('name','newPlace');
        popupInputName.classList.add('popup__input');
        popupInputName.setAttribute('type','text');
        popupInputName.setAttribute('placeholder','Название');
        popupInputName.setAttribute('name','name');
        popupInputName.setAttribute('required','');
        popupInputLink.classList.add('popup__input');
        popupInputLink.setAttribute('type','url');
        popupInputLink.setAttribute('name','link');
        popupInputLink.setAttribute('required','');
        popupInputLink.setAttribute('placeholder','Ссылка на картинку');
        popupButton.classList.add('button');
        popupButton.classList.add('popup__button');
        popupButton.textContent = '+';

        this.popup.appendChild(popupContainer);
        popupContainer.appendChild(popupClose);
        popupContainer.appendChild(popupTitle);
        popupContainer.appendChild(popupForm);
        popupForm.appendChild(popupInputName);
        popupForm.appendChild(popupInputLink);
        popupForm.appendChild(popupButton);
        this.open();

        popupForm.addEventListener('submit', (event)=> {
            event.preventDefault();
            this.cardList.addCard(popupInputName.value,
                popupInputLink.value);
            this.close(this.popup);
            popupForm.reset();

        });
        popupClose.addEventListener('click', () => {
            this.close(this.popup);
        });
    }
    formProfile(){
            
        const popupContainer = document.createElement('div');
                const popupClose = document.createElement('img');
                const popupTitle = document.createElement('h3');
                const popupForm = document.createElement('form');
                const popupInputName = document.createElement('input');
                const popupInputJob = document.createElement('input');
                const popupButton = document.createElement('button');
                const popupErrorName = document.createElement('p');
                const popupErrorLink =  document.createElement('p');
               
                popupContainer.classList.add('popup__content');
                popupClose.classList.add('popup__close');
                popupClose.setAttribute('src','./images/close.svg');
                popupTitle.classList.add('popup__title');
                popupTitle.textContent = 'Редактировать профиль';
                popupForm.classList.add('popup__form');
                popupForm.setAttribute('name','editProfile');
                popupInputName.classList.add('popup__input');
                popupInputName.setAttribute('type','text');
                popupInputName.setAttribute('placeholder','Имя');
                popupInputName.setAttribute('name','name');
                popupInputName.value = this.userInfo.userNameElement.textContent;
                popupInputJob.classList.add('popup__input');
                popupInputJob.setAttribute('type','text');
                popupInputJob.setAttribute('name','link');
                popupInputJob.setAttribute('placeholder','О себе');
                popupInputJob.value = this.userInfo.userJobElement.textContent;
                popupButton.classList.add('button');
                popupButton.classList.add('popup__button_edit-profile');
                popupButton.classList.add('popup__button');
                popupButton.textContent = 'Сохранить';
                popupErrorName.classList.add('popup__error-message');
                popupErrorLink.classList.add('popup__error-message');
                
                this.popup.appendChild(popupContainer);
                popupContainer.appendChild(popupClose);
                popupContainer.appendChild(popupTitle);
                popupContainer.appendChild(popupForm);
                popupForm.appendChild(popupInputName);

                popupForm.appendChild(popupErrorName);
                popupForm.appendChild(popupInputJob);
                popupForm.appendChild(popupErrorLink);
                popupForm.appendChild(popupButton);
                this.open();

                popupForm.addEventListener('input', () =>{
                    this.formValidator.setEventListeners(event);
                });

                popupForm.addEventListener('submit', (event)=> {
                event.preventDefault();
                this.userInfo.setUserInfo(popupInputName.value,popupInputJob.value);                
                this.close(this.popup);

                });
                popupClose.addEventListener('click', () => {
                    this.close(this.popup);
                });
    }
}



