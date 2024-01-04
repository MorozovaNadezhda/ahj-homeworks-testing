import recognizeCard from './recognizeCard';
import validateCardNumber from './validateCardNumber';
import selectCard from './selectCard';

export default class CardValidation {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.inputText = '';
  }

  static get markup() { // assigning the method to function-Class
    return `
    <h1>Credit card validator</h1>
    <div id="card">
      <form class="valid-card">
        <div class="img-cards">
          <div class="img-card" id="visa"><img src="./img/visa.png" alt=""></div>
          <div class="img-card" id="mir"><img src="./img/mir.png" alt=""></div>
          <div class="img-card" id="mastercard"><img src="./img/mastercard.png" alt=""></div>
          <div class="img-card" id="yandexmoney"><img src="./img/yandexmoney.png" alt=""></div>
          <div class="img-card" id="americanexpress"><img src="./img/americanexpress.png" alt=""></div>
          <div class="img-card" id="discover"><img src="./img/discover.png" alt=""></div>
          <div class="img-card" id="jcb"><img src="./img/jcb.png" alt=""></div>
        </div>
        <input type="text" id="input" placeholder="Type your card number">
        <button id="button-validate">Validate</button>
      </form>
    </div>
    `;
  }

  bindToDOM() {
    this.parentElement.innerHTML = this.constructor.markup;
    const submit = this.parentElement.querySelector('.valid-card');
    this.inputText = this.parentElement.querySelector('[id=input]');
    submit.addEventListener('submit', (e) => this.onSubmit(e)); // button
    this.inputText.addEventListener('keypress', (e) => this.onKeypress(e)); // keypress
    this.inputText.addEventListener('input', () => this.onInput()); // input
  }

  onSubmit(event) {
    event.preventDefault();
    this.validateCard(this.inputText.value);
  }

  onKeypress(event) {
    event.preventDefault();
    if (event.key.search(/\d/) !== -1) {
      this.inputText.value += event.key; // input text in the input string
      selectCard(recognizeCard(this.inputText.value)); // select card by the input value through the selectCard function
    }

    if (event.key === 'Enter') {
      this.validateCard(this.inputText.value);
    }
  }

  onInput() {
    selectCard(recognizeCard(this.inputText.value)); // select card by the input value through the selectCard function
  }

  validateCard(cardNumber) {
    if (cardNumber.length < 1 || !validateCardNumber(cardNumber)) { // validation
      this.inputText.className = 'invalid'; // add invalid state
      return;
    }
    this.inputText.className = 'valid'; // add valid state
  }
}