document.addEventListener("DOMContentLoaded", function() {
    var envelopes = document.querySelectorAll('.envelope');
  
    envelopes.forEach(function(envelope) {
      if (!envelope.classList.contains('open')) {
        envelope.addEventListener('click', function() {
          envelope.classList.remove('new');
          envelope.classList.add('open');
        });
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    var redirectButton = document.getElementById('redirect-button');
  
    redirectButton.addEventListener('click', function() {
      window.location.href = "photos.html"; // Replace with your desired URL
    });
  });
    