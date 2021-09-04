
const loading = function(e) {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.add('loading');
    e.target.setAttribute('disabled','disabled');
    setTimeout(function(){
      e.target.classList.remove('loading');
      e.target.removeAttribute('disabled');
    },1500);
  };
  
  const btns = document.querySelectorAll('button');
  for (let i=btns.length-1;i>=0;i--) {
    btns[i].addEventListener('click',loading);
  }