import axios from 'axios';

const CARD_API_BASE_URL = "http://localhost:9080/cards";

class CardService {

    getCards(){
        return axios.get(CARD_API_BASE_URL);
    }

    createCard(card){
        return axios.post(CARD_API_BASE_URL, card);
    }

    getCardById(cardId){
        return axios.get(CARD_API_BASE_URL + '/' + cardId);
    }

    getCardByName(cardName){
        return axios.get(CARD_API_BASE_URL + '/name/' + cardName);
    }

    updateCard(card, cardId){
        return axios.put(CARD_API_BASE_URL + '/' + cardId, card);
    }

    deleteCard(cardId){
        return axios.delete(CARD_API_BASE_URL + '/' + cardId);
    }
}

export default new CardService()