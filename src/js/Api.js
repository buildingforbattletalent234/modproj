export class Api {
    constructor(options) {
     this.options = options 
    }
    getName() {               
        return    fetch(`${this.options.url}/users/me`, {
            headers: {
                authorization: this.options.token
            }
        })
        .then(res => {
            if (res.ok){
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })  
          
    } 
    getCards() {               
        return    fetch(`${this.options.url}/cards`, {
            headers: {
                authorization: this.options.token
            }
        })
        .then(res => {
            if (res.ok){
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        }) 
    }
    updateName(name,about){
        return    fetch(`${this.options.url}/users/me`, {
            method : 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                authorization: this.options.token
            },
            
            body: JSON.stringify({
                name: name,
                about: about
              })
        })
        .then(res => {
            if (res.ok){
                console.log('Все ок')
                return res.json()                
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch(err => console.log(err));
         
    }
}

