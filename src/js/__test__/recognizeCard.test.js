import recognizeCard from '../recognizeCard';

test.each([
  ['Visa', '4000400520031245', 'visa'], // 16 - 4x4
  ['Visa', '427952364512851155', 'visa'], // 18 - 4x4
  ['Visa false', '7102521241241251', false],
  ['Mir', '2200451222223525', 'mir'], // 16 - 4x4
  ['Mir false', '9000020121214548', false],
  ['Mastercard', '3714496353984310', 'mastercard'], // 16 - 4x4
  ['Mastercard', '515233635245789', 'mastercard'], // 15 - 4x6x5
  ['Mastercard false', '500233635245789', false],
  ['YandexMoney', '410013211543954', 'yandexmoney'], // 15 row
  ['YandexMoney false', '100013211543954', false],
  ['American Express', '375944451251251', 'americanexpress'], // 15 - 4x6x5
  ['American Express', '363332356254125', 'americanexpress'], // 15 - 4x6x5
  ['American Express', '300023523621254', 'americanexpress'], // 15 - 4x6x5
  ['American Express', '389564215215444', 'americanexpress'], // 15 - 4x6x5
  ['American Express', '309559265555451', 'americanexpress'], // 15 - 4x6x5
  ['American Express false', '956559265555451', false],
  ['Discover', '6452125474589563', 'discover'], // 16 - 4x4
  ['Discover', '6011000032658522', 'discover'], // 16 - 4x4
  ['Discover false', '7711000032658522', false],
  ['JCB', '3528962121253236', 'jcb'], // 16 - 4x4
  ['JCB', '3542578965232154', 'jcb'], // 16 - 4x4
  ['JCB', '3585245125555242', 'jcb'], // 16 - 4x4
  ['JCB false', '9695245125555242', false],
])(('Should be %s'), (_, input, expected) => {
  expect(recognizeCard(input)).toBe(expected);
});