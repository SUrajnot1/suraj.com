window.onload = function() {
    const texts = ["C ", "Python", "Html", "Css", "Js", "Php", "SQL"];
    const codeText = document.getElementById("code");
    const surajText = document.querySelector('.changing-color');
    let index = 0;

    setInterval(() => {
        // Apply fade effect
        codeText.classList.remove('fade-text');
        void codeText.offsetWidth; // Trigger reflow
        codeText.classList.add('fade-text');
        codeText.innerHTML = texts[index];
        index = (index + 1) % texts.length;
    }, 2000);

    // Set changing text color to match "Code With Suraj" text color
    const color = window.getComputedStyle(surajText).color;
    codeText.style.color = color;
};




function playSound(soundFile) {
    var audio = document.getElementById("buttonSound");
    audio.src = soundFile;
    audio.play();
  }





const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    if (hamIcon.style.display === "none") {
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    }
    else {
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const modeSwitchButton = document.getElementById('mode-switch');
    const currentMode = localStorage.getItem('mode') || 'light';
    
    // Apply the current mode
    document.body.classList.add(`${currentMode}-mode`);
    
    modeSwitchButton.addEventListener('click', () => {
        if (document.body.classList.contains('light-mode')) {
            document.body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('mode', 'dark');
            modeSwitchButton.textContent = '🌙'; // Moon icon for dark mode
        } else {
            document.body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('mode', 'light');
            modeSwitchButton.textContent = '☀️'; // Sun icon for light mode
        }
    });
});



$(function() {
    $( "#button" ).click(function() {
      $( "#button" ).addClass( "onclic", 250, validate);
    });
  
    function validate() {
      setTimeout(function() {
        $( "#button" ).removeClass( "onclic" );
        $( "#button" ).addClass( "validate", 450, callback );
      }, 2250 );
    }
      function callback() {
        setTimeout(function() {
          $( "#button" ).removeClass( "validate" );
        }, 1250 );
      }
    });

