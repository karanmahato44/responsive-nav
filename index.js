const ham = document.querySelector('.right-ham');
const menu = document.querySelector('.right-navitems');

ham.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    console.log('foo');
  } else {
    menu.classList.add('hidden');
  }
})