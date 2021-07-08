var handleScroll = function() {
    // Get the height of the hero section
    var heroHeight = document.querySelector('#hero').offsetHeight;
    var diagonal = document.querySelector('.hero-diagonal polygon');
    // Calculate the skew value
    var skew = (window.scrollY / heroHeight) * 100;
    // Assign the skew value to the polygon points attr
    // The value needs to be set as an array
    diagonal.setAttribute('points', [0,100, 100, skew, 100,100]);
  }
  window.addEventListener("scroll", handleScroll);