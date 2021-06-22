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

let arr = [1, 2, -20, 4, 5, 7, 8, 10, 6, 3]
let start = 0;
let end = arr.length -1;

function recursive (arr, el, start, end) {

    let middle;
    let indexEl = -1;

    middle = Math.ceil((start + end) / 2);
    if(start <= end){
        if(el === arr[middle] ) {

            indexEl = middle;
            return indexEl;
            
        } else if(el < arr[middle] ) {

            end = middle -1;
            return recursive(arr, el, start, end)

        } else if(el > arr[middle] ){
            start = middle +1;
            return recursive(arr, el, start, end)
        } 
    } else{

        return indexEl;
    }     
}

let index_5 = recursive(arr, 5)

console.log(index_5, 'index_5')