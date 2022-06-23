const items = document.querySelectorAll('.slide');
const itemCount = items.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
let count = 0;

previousItem.setAttribute('disabled', 'disabled')

function showNextItem() {
  items[count].classList.remove('active');
 
  if (count == 1) {
    nextItem.setAttribute('disabled', 'disabled')
  }

  if (count < itemCount - 1) {
    previousItem.removeAttribute('disabled')
    count++;
  }

  items[count].classList.add('active');

}

function showPreviousItem() {
  items[count].classList.remove('active');


  if (count > 0) {
    count--;
  }

  if (count <= 1) {
    nextItem.removeAttribute('disabled')
  }

  if (count == 0) {
    previousItem.setAttribute('disabled', 'disabled')
  }

  items[count].classList.add('active');

}





function keyPress(e) {
  e = e || window.event;

  if (e.keyCode == '37') {
    showPreviousItem();
  } else if (e.keyCode == '39') {
    showNextItem();
  }
}

nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);
document.addEventListener('keydown', keyPress);