import "../pages/index.css";
import '../images/close.svg';
import {Api} from './Api.js'
import {FormValidator} from './FormValidator.js';
import {CardList} from './CardList.js';
import {UserInfo} from './UserInfo';
import {Popup} from './Popup.js';
import {Card} from './Card.js';


const options = {
    url : NODE_ENV==='development' ? 'http://praktikum.tk/cohort8' : 'https://praktikum.tk/cohort8',
    token : '926bedaf-874f-44eb-9e92-0facb16d720b'
}

const api = new Api(options);
const userInfo = new UserInfo(api);
userInfo.updateUserInfo();
const formValidator = new FormValidator();
const cardListRender = new CardList(Card, api);
new Popup(cardListRender, formValidator, userInfo);











