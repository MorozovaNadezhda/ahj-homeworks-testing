import validateCardNumber from '../validateCardNumber';

test.each([
  ['Valid number - true', '371449635398431', true],
  ['Invalid number - false', '9914496353984', false],
])(('Should be %s'), (_, input, expected) => {
  expect(validateCardNumber(input)).toBe(expected);
});