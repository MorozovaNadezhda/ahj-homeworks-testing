export default function recognizeCard(cardNumber) {
  let returnCard = false;
  if (cardNumber.search(/^(40|4[2-9])/) !== -1) { // 16 || 18 - 4x4
    returnCard = 'visa';
  } else if (cardNumber.search(/^(220[0-4])/) !== -1) { // 16 - 4x4
    returnCard = 'mir';
  } else if (cardNumber.search(/^(5[1-5])|37[1-4]/) !== -1) { // 15 - 4x4 || 4x6x5
    returnCard = 'mastercard';
  } else if (cardNumber.search(/^(410[0-9])/) !== -1) { // 15 - row
    returnCard = 'yandexmoney';
  } else if (cardNumber.search(/^(37[5-9]|36|30[0-5]|3[89]|3095)/) !== -1) { // 15 - 4x6x5
    returnCard = 'americanexpress';
  } else if (cardNumber.search(/^(6[45]|6011)/) !== -1) { // 16 - 4x4
    returnCard = 'discover';
  } else if (cardNumber.search(/^(352[89]|35[3-8][0-9])/) !== -1) { // 16 - 4x4
    returnCard = 'jcb';
  }
  return returnCard;
}