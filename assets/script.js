/*let click_btn = document.querySelector('.resume_right');

click_btn.addEventListener('click', function(event) {
    let target = event.target;

    if(target.tagName != 'h3'){
        return;
    } else {
        target.parentElement.classList.toggle('hide_show');
    }
});*/


let title = document.getElementsByTagName('h3');
for (let i = 0; i < title.length; i++) {
    title[i].addEventListener('click', function(event) {
        this.classList.toggle('active');
        let target = event.target;
    if(target.tagName != 'h3') {
         return;
    } else {
        target.classList.toggle('hide_show');
        }
    })
}
