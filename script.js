// Typing effect in Hero Section
const typingText = ["Class 9–10", "Class 11–12", "Competitive Exams"];
let index = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;
const typingElement = document.querySelector('.typing');

function type() {
  if (!typingElement) return;
  if (index >= typingText.length) index = 0;
  const fullText = typingText[index];

  if (isDeleting) {
    currentText = fullText.substring(0, charIndex--);
  } else {
    currentText = fullText.substring(0, charIndex++);
  }

  typingElement.textContent = currentText;

  if (!isDeleting && charIndex === fullText.length) {
    isDeleting = true;
    setTimeout(type, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index++;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

type();
