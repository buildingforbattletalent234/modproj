export class CardList {
    constructor(createCard, api) {
        this.createCard = (name, link, id) => new createCard(name, link, id)
        this.api = api;
        this.createCardMethods = new createCard;
        
        this.cards = [];
        this.elementContainer = document.querySelector('.places-list');
        this.render();
        this.bindListners();
        



    }
    addCard(nameForm, linkForm) {
        const newCard = this.createCard(nameForm, linkForm, this.cards.length);
      
        this.cards.push(newCard);
        const { cardElement } = newCard;
        this.elementContainer.appendChild(cardElement);


    }
    render() {
        this.api.getCards()
            //  Надо исправить: Методы   преобразование данных  лучше пускай будут в классе API +++            
            .then((data) => {
                data.forEach((card, index) => {
                    const newCard = this.createCard(card.name, card.link, index);
                    const { cardElement } = newCard;
                    this.cards.push(newCard);
                    this.elementContainer.appendChild(cardElement);
                })
            })
            .catch(err => console.log(err));
    }

    bindListners() {
        this.elementContainer.addEventListener('click', (event) => {

            if (event.target.dataset.id !== undefined) {
                const cardId = event.target.dataset.id

                this.card = this.cards.find(function (item, arrId) {
                    arrId = String(arrId);
                    return arrId === cardId;
                });
                this.card[event.target.dataset.action]();

            };

        })
    }

}
