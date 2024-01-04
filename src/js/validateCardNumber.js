// Luhn algorithm
export default function validateCardNumber(digits) {
  let sum = 0;
  for (let i = 0; i < digits.length; i += 1) {
    /* eslint radix: ["error", "as-needed"] */
    let cardNumber = parseInt(digits[i]);
    if ((digits.length - i) % 2 === 0) {
      cardNumber *= 2;
      if (cardNumber > 9) {
        cardNumber -= 9;
      }
    }
    sum += cardNumber;
  }
  return sum % 10 === 0;
}

// '371449635398431' -> length 15
// convert string '371449635398431' to number 3714 4963 5398 431 taking the null index, etc.
// ((15 - 3) % 2 === 0) ? 3 *=2 -> 9 || ((15 - 7) % 2 === 0) ? 7 *= 7 -> 49 --> 40 || ((15 - 1) % 2 === 0) ? 1 *= 1 -> 1 || ((15 - 4) % 2 === 0) X ||
// ((15 - 4) % 2 === 0) X || ((15 - 9) % 2 === 0) ? 9 *= 9 -> 81 --> 72 || ((15 - 6) % 2 === 0) X || ((15 - 3) % 2 === 0) ? 3 *= 3 -> 9 ||
// ((15 - 5) % 2 === 0) ? 5 *= 5 -> 25 --> 16 || ((15 - 3) % 2 === 0) ? 3 *= 3 -> 9 || ((15 - 9) % 2 === 0) ? 9 *= 9 -> 81 --> 72 ||
// ((15 - 8) % 2 === 0) X || ((15 - 4) % 2 === 0) X || ((15 - 3) % 2 === 0) ? 3 *= 3 -> 9 || ((15 - 1) % 2 === 0) ? 1 *= 1 -> 1
// 0 += 9 += 40 += 1 += 72 += 9 += 16 += 9 += 72 += 9 += 1 --> 238