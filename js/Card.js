class Card {
    constructor(name, link, id) {
        this.cardElement = this.create(name, link, id);
        this.likeIcon = this.cardElement.querySelector('.place-card__like-icon')
    }

    like() {

        this.likeIcon.classList.toggle('place-card__like-icon_liked');
    }
    remove() {
        this.cardElement.remove()
    }


    create(name, link, id) {

        const place = document.createElement('div');
        const placeImage = document.createElement('div');
        const placeButtonDel = document.createElement('button');
        const placeDescription = document.createElement('div');
        const placeName = document.createElement('h3');
        const placeButtonLike = document.createElement('button');

        place.classList.add('place-card');
        placeImage.classList.add('place-card__image')
        placeImage.style.backgroundImage = (`url("${link}")`);
        placeImage.setAttribute('data-url', `${link}`)
        placeButtonDel.classList.add('place-card__delete-icon');

        placeButtonDel.setAttribute('data-id', `${id}`)
        placeButtonDel.setAttribute('data-action', `remove`)
        placeDescription.classList.add('place-card__description');
        placeName.classList.add('place-card__name');
        placeButtonLike.classList.add('place-card__like-icon');

        placeButtonLike.setAttribute('data-id', `${id}`)
        placeButtonLike.setAttribute('data-action', `like`)
        placeName.textContent = `${name}`


        place.appendChild(placeImage);
        place.appendChild(placeDescription);
        placeImage.appendChild(placeButtonDel);
        placeDescription.appendChild(placeName);
        placeDescription.appendChild(placeButtonLike);

        return place;
    }
};



