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
//let title = document.getElementsByClassName('hide');

for (let i = 0; i < titles.length; i++) {
    titles[i].addEventListener('click', function(event) {
        
    if(event.target.parentNode.nextElementSibling.tagName !== 'UL') {
         return;
    } else {
       event.target.parentNode.nextElementSibling.classList.toggle('hide');
       event.target.parentNode.nextElementSibling.classList.add('show');
        }
    })
}

let dat = document.getElementsByClassName('dat');
for (let i = 0; i < dat.length; i++) {
    dat[i].addEventListener('click', function(event) {
        
    if(event.target.nextElementSibling.tagName !== 'UL') {
         return;
    } else {
       event.target.nextElementSibling.classList.toggle('hide');
       event.target.nextElementSibling.classList.add('show_2');
        }
    })
}