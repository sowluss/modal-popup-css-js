// document.getElementById('button').addEventListener('click', function(){
//   document.querySelector('.modal-bg').style.display = 'flex';
// });
  
  
const button = document.getElementById('button');
button.addEventListener('click', function(){
  document.querySelector('.bg-modal').style.display = 'flex';
});

const close = document.querySelector('.close');
close.addEventListener('click', function(){
  document.querySelector('.bg-modal').style.display = 'none';
});
  
 
 
 