const btn = document.querySelector('.todolist__btn'),
  list = document.querySelector('.list'),
  input = document.querySelector('.todolist__input'),
  items = document.querySelectorAll('.list__item');


btn.addEventListener('click', (e) => {
  e.preventDefault();
  addItem();
  input.value = "";
});

function addItem() {
  let val = input.value;

  const element = document.createElement('li');

  element.classList.add('list__item');

  element.innerHTML = val;

  list.append(element);

  // items.forEach((i, element) =>{
  //   element.innerHTML = `${i + 1} + ${val}`;
  // });


}




