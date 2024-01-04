import CardValidation from '../CardValidation';

test('Should markup new elements in html', () => {
  document.body.innerHTML = '<div id="container"></div>';
  const container = document.querySelector('#container');
  const parent = new CardValidation(container); // input elements in the parent's container
  parent.bindToDOM(); // call the events

  expect(container.innerHTML).toEqual(CardValidation.markup);
});

test('Should validate the input value', () => {
  document.body.innerHTML = '<div id="container"></div>';
  const container = document.querySelector('#container');
  const parent = new CardValidation(container);
  parent.bindToDOM();

  const input = container.querySelector('[id=input]');
  input.value = '4000252365241511';
  const submit = container.querySelector('.valid-card');
  submit.submit();

  expect(input.classList.contains('valid')).toBeTruthy();
});