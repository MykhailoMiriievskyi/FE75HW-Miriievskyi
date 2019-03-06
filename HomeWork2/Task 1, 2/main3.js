(function() {
  var figureInput = document.querySelectorAll('[name="figure"]');
  var area = document.querySelector('#area');
  var colorInput = document.querySelector('#colorInput');
  var numberInput = document.querySelector('.number');

  for (var i = 0; i < figureInput.length; i++) {
    figureInput[i].addEventListener('click', function() {
        for (var i = 0; i < figureInput.length; i++) {
            if (figureInput[0].checked)  {
                numberInput.style.display = 'block';
            }
           
        }
    });
}
  
for (var i = 0; i < figureInput.length; i++) {
  figureInput[i].addEventListener('click', function() {
      for (var i = 0; i < figureInput.length; i++) {
          if (figureInput[1].checked)  {
              numberInput.style.display = 'none';
          }
         
      }
  });
} 
  
  area.addEventListener('click', function(e) {
    var target = e.target;
    var color = colorInput.value;
    var el = document.createElement('div');
    var width;
    

    if(typeof(+newWidth.value) !== 'number' || +newWidth.value === NaN) {
      return false;
  } else {
      width = +newWidth.value;
      height = width;
  }
   
for (var i = 0; i < figureInput.length; i++) {
  if (figureInput[0].checked) {
      el.classList.add('sguare');
      el.style.width = width + 'px';
      el.style.height = width + 'px';
           
    } else if (figureInput[1].checked) {
      el.classList.add('circle');
      
    }
  }

  el.style.top = e.offsetY + 'px';
  el.style.left = e.offsetX + 'px';
  el.style.backgroundColor = color;
  target.appendChild(el);
   
  })
  

}())




