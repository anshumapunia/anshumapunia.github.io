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
 


function downloadResume() {
  var resumeLink = document.getElementById("resume-link-1");
  var resumePDF = resumeLink.href;
  window.open(resumePDF, "_blank");
}

document.getElementById("resume-button-1").addEventListener("click", downloadResume);

function downloadResume1() {
  var resumeLink = document.getElementById("resume-link-2");
  var resumePDF = resumeLink.href;
  window.open(resumePDF, "_blank");
}

document.getElementById("resume-button-2").addEventListener("click", downloadResume1);