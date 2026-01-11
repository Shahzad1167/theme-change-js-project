/*const button=document.querySelectorAll('.theme');
const body=document.querySelector('body');
button.forEach(function(b){
    b.addEventListener('click', function(e)
    {
        if(e.target.id === 'lightBtn'){
   body.style.backgroundColor = "white";
        }
         if(e.target.id === 'darkBtn'){
  body.style.backgroundColor = "black";
        }
    });
});

*/

const buttons = document.querySelectorAll('.theme');
const body = document.body;

buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {

        if (e.target.id === 'lightBtn') {
            body.style.backgroundColor = "white";
            body.style.color = "black";
        }

        if (e.target.id === 'darkBtn') {
            body.style.backgroundColor = "black";
            body.style.color = "white";
        }
    });
});
