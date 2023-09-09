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
 
// function downloadResume(resumeLinkId) {
//   var resumeLink = document.getElementById(resumeLinkId);
//   var resumePDF = resumeLink.href;
//   window.open(resumePDF, "_blank");
// }


// function openResume(pdfURL) {
//   window.open(pdfURL, "_blank");
// }

// function openResume(pdfURL) {
//   var newTab = window.open();
//   newTab.document.write('<iframe src="' + pdfURL + '" frameborder="0" style="border:0; top:0px; left:0px; width:100%; height:100%;" allowfullscreen></iframe>');
// }

// function openResumeInNewTab() {
//   var resumePDF = "Anshuma_Devi_Resume.pdf";
//   var openedWindow = window.open(resumePDF, "_blank");

//   if (openedWindow) {
      
//       openedWindow.focus();
//   } else {

//       alert("Your browser may have blocked opening the resume. Please check your browser settings.");
//   }
// }

// function openResumeInNewTab() {
//   var resumeLink = document.querySelector(".resume");
//   var resumePDF = resumeLink.href;
//   window.open(resumePDF, "_blank");
// }

// document.querySelector(".resume").addEventListener("click", function (e) {
//   e.preventDefault(); // Prevent the default link behavior
//   openResumeInNewTab();
// });

function downloadResume1() {
  var resumeLink = document.getElementById("resume-link-2");
  var resumePDF = resumeLink.href;
  window.open(resumePDF, "_blank");
}

document.getElementById("resume-button-2").addEventListener("click", downloadResume1);


function downloadResume() {
  var resumeLink = document.getElementById("resume-link-1");
  var resumePDF = resumeLink.href;
  window.open(resumePDF, "_blank");
}

document.getElementById("resume-link-1").addEventListener("click", downloadResume);