class Api {
    constructor(options) {
     this.options = options     
    }
    getName() {               
        return    fetch(`${options.url}/users/me`, {
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
        return    fetch(`${options.url}/users/me`, {
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
    getCards() {               
        return    fetch(`${options.url}/cards`, {
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
}

	/**
    * Здравствуйте. Молодцы что создали класс
    * 
     *  Надо исправить: Самый правильный способ, это создание  одного метода в классе API  как например указан в брифе
     // url лучше передавать при инициализации класса в конструктор

    !!!!!!
    Не понял, как реализовать один метод для всех запросов, и в брифе указан пример, который подразумевает  несколько методов
    !!!!!!




     fetch(`url/cards`,
                {
       headers: {
                        // ключ который надо передавать в параметрах
      authorization: param.authorization
                    }
                })
      .then(res => {
        if (res.ok) {
       return res.json();
                }
                // если ошибка, переходим в catch
       return Promise.reject(`Ошибка: ${res.status
                }`);
            })
    .then((result) => {
                // обрабатываем результат
                // а точнее возвращает результат работы прямо в тот класс откуда вызывали
            })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
                });
    
 Хочу заметить что данные авторизации лучше передать при создании класса API в ввиде объекта	
    
     *
        Надо исправить: Необходимо в метод добавить обработку ошибок   +++
          .catch((err) => { 
        	console.log(err); 
        	});  

        Надо исправить: Необходимо в методы добавить преобразование данных  +++
       .then(res => { if (res.ok) { return res.json();   } }) 
     * 
    
            "https://praktikum.tk/cohort8/" - такие данные лучше убрать в константу и передавать в класс при инициализации
     * 

         * Класс Api это отдельный класс который ничего не знает о других классах и методах
         * Вы можете только получать данные из этого класса и использовать эти данные.
         * Представьте, что я дам Вам другой класс(допустим DataBase) к внутренностям которого вы не будете иметь доступ и даже прочитать этот файл не сможете
         * скажу что у него есть несколько методов  getInitialCards deleteCard addCard, editUserInfo, setUserInfo и так далее
         * Который только возвращает данные, а вы можите получить только обращась к этим методам.
         * Соответственно в классе нельзя реализовать такие методы как querySelector или обратиться к другому классу, а только обратитьсяк методам.
         * Отдельная обязанность. Таким же способом Вы обращаетесь к серверу. Вы не знаете, что на сервере, даже язык программирования, но вы знаете методы
         * к которым обращаетесь и способ обращения. Это и есть обязанность отдельного класса.
         * 
    *   Надо исправить: перенесите все файлы ks в отдельную папку например js +++
    * 
    * 
     * работа принимается только при исправлении всех "Надо исправить"
     *
    */

/**
 * Здравствуйте. Я наверное не ясно выразился, не правильно
 * В принципе как сейчас сделали уже хорошо
 * Работа принимается
 * 
 * 
 */