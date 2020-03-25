
class UserInfo {
    constructor(api) {
        this.api = api;
        this.userNameElement = document.querySelector('.user-info__name');
        this.userJobElement = document.querySelector('.user-info__job');

      
    }
    setUserInfo(user,job) {
        console.log(user + job)
        this.api.updateName(user,job)
        .then(()=>{
            this.updateUserInfo();
        })
    }
    updateUserInfo() {
        this.api.getName()        
        .then((data) => {  
            console.log(data);        
            this.userNameElement.textContent = data.name;
            this.userJobElement.textContent = data.about;
        })
        .catch(err => console.log(err));
       
    }
}


