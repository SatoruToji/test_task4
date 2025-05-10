export function handleMobileBtn(e) {
  const li = document.createElement('li');
  li.classList.add('.nav__item');

  const btn = document.createElement('button');
  btn.textContent = '☰';
  btn.classList = 'mobileBtn'

  document.querySelectorAll('.nav__item').forEach((li) => li.remove());
  document.querySelector('.nav__list').appendChild(li).appendChild(btn);

  btn.addEventListener('click', () => {
    console.log('btn')
  })
}
