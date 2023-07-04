function toggleContent(sectionID) {
  var content = document.getElementById(sectionID);
  var allContentElements = document.getElementsByClassName("content");
  var allContentElements2 = document.getElementsByClassName("content2");

  for (var i = 0; i < allContentElements.length; i++) {
    var element = allContentElements[i];
    var element2 = allContentElements2[i];
    
    if (element.id === sectionID) {
      element.classList.toggle("show");
    } else {
      element.classList.remove("show");
    }

    if (element2.id === sectionID) {
      element2.classList.toggle("show");
    } else {
      element2.classList.remove("show");
    }
  }
  
  var background = document.getElementById("background");
  background.classList.toggle("show");
}

$(document).ready(function() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
        entry.target.classList.add('visible');
      }
    });
  }, {threshold: 0.8});

  $('.fade-in-element').each(function() {
    observer.observe(this);
  });
});

$(window).on('load', function() {
  setTimeout(function() {
    $('#loading-animation').addClass('fade-out');
  }, 800);
});


function handleClick() {
  alert("Who needs a web dev section? I'm the one who built this site, and I already know it's perfect!");
}










