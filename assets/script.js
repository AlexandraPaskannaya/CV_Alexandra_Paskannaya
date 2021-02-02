/*let click_btn = document.querySelector('.resume_right');

click_btn.addEventListener('click', function(event) {
    let target = event.target;

    if(target.tagName != 'h3'){
        return;
    } else {
        target.parentElement.classList.toggle('hide_show');
    }
});*/


let titles = document.getElementsByTagName('h3');

for (let i = 0; i < titles.length; i++) {
    titles[i].addEventListener('click', function(event) {
        
    if(event.target.parentNode.nextElementSibling.tagName !== 'UL') {
         return;
    } else {
       event.target.parentNode.nextElementSibling.classList.toggle('hide');
        }
    })
}
