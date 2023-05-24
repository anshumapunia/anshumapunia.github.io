window.addEventListener('DOMContentLoaded', function() {
  var textElement = document.querySelector('.fade-in-fade-out');
  var texts = ['Anshuma Devi', 'Web Developer', 'Codder', 'Backend Programmer'];
  var currentTextIndex = 0;

  function changeText() {
    textElement.textContent = texts[currentTextIndex];
    currentTextIndex = (currentTextIndex + 1) % texts.length;
  }
  changeText();
  setInterval(changeText, 3000);
});
