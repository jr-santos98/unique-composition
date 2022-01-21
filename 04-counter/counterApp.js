var count = 0;
const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach( function (button) {
  button.addEventListener('click', function (e) {
    const type = e.currentTarget.classList;
    if (type.contains("decrease")) {
      count--;
    } else if (type.contains("increase")) {
      count++;
    } else {
      count = 0;
    } if (count > 0) {
      value.style.color = "green";
    } if (count < 0) {
      value.style.color = "red";
    } if (count === 0) {
      value.style.color = "black";
    }
    value.textContent = count;
  } );
});
