const options = {
    url : 'https://praktikum.tk/cohort8',
    token : '926bedaf-874f-44eb-9e92-0facb16d720b'
}
const api = new Api(options);
const userInfo = new UserInfo(api);
userInfo.updateUserInfo();
const formValidator = new FormValidator();
const cardListRender = new CardList(Card, api);
new Popup(cardListRender, formValidator, userInfo);










