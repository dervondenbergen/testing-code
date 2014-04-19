var t1 = document.querySelector('.input');
var t2 = document.querySelector('.output');

function resize ( source, destination ) {
  
  var resizeInt = null;
    
  function resizeEvent () {
    destination.style.width  = source.style.width;
    destination.style.height = source.style.height;
  }

  source.addEventListener('mousedown', function() {
    resizeInt = setInterval(resizeEvent, 1000/15);
  });

  window.addEventListener('mouseup', function() {
    if (resizeInt !== null) {
      clearInterval(resizeInt);
      source.removeEventListener('mousedown');
    }
    resizeEvent();
  });
  
}

resize(t1, t2);
