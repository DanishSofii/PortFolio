window.onload = function() {
    const preloader = document.querySelector('.preloader');

    setTimeout(function() {
        preloader.style.display = 'none';
    }, 1000);
};
// for back to top btn ------------------------------------------>
let backtop = document.getElementById("backtopbtn");
window.onscroll =function() {
    scrollFunction()
};

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop >20) {
            backtop.style.display='block';
        
    }
    else {
        backtop.style.display='none';

    }
}
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
