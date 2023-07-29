var buttons = document.querySelectorAll("img[ca]");

buttons.forEach(function(e){
  e.setAttribute('onclick', "alert('click')");
  e.onclick="this.classList.toggle('enlarge')";
})

function lv(e){
  viewer=document.getElementById('viewer');
  vimg=document.getElementById('viewimg');
  viewer.classList.add('show');
  setTimeout(function(){viewer.classList.add('enabled')},1);
  setTimeout(function(){vimg.src=e.src},2);
}
function cv(e){
  viewer=document.getElementById('viewer');
  vimg=document.getElementById('viewimg');
  setTimeout(function(){viewer.classList.remove('enabled')},1);
  setTimeout(function(){viewer.classList.remove('show')},201);
}