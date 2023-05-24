window.addEventListener('DOMContentLoaded', function() {
  var textElement = document.querySelector('.fade-in-fade-out');
  var texts = ['Anshuma Devi', 'Web Developer', 'Codder', 'freelencer'];
  var currentTextIndex = 0;

  function changeText() {
    textElement.textContent = texts[currentTextIndex];
    currentTextIndex = (currentTextIndex + 1) % texts.length;
  }

  setInterval(changeText, 3000);
});
