import { createCardElement } from './view.mjs';

export function printLayout() {
  
    let cardArray = localStorage.getItem('myCards');
    if (cardArray){
      cardArray = JSON.parse(cardArray)
        cardArray.forEach(cardElement => {
            createCardElement(cardElement.type, cardElement.text)
        })
    }

console.log(cardArray);

}