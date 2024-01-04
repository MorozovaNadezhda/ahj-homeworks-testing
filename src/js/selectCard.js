export default function selectCard(card) { // export function into validateCard class to recognize the incoming input value
  const imgCards = document.getElementsByClassName('img-card');
  for (const element of imgCards) {
    element.style.opacity = 0.3; // 'non-visible' cards
  }
  if (card) {
    const recognizedCard = document.getElementById(card);
    recognizedCard.style.opacity = 1; // highlight the card
  }
}