// works section active items
const categoryItems = document.querySelectorAll('.works__category-item');
const worksLists = document.querySelectorAll('.works__list');
const ratingsTables = document.querySelectorAll('.ratings__table');

export const setActiveItem = () => {
  categoryItems.forEach(item => {
    item.addEventListener('click', (e) => {
      removeActiveClass();
      let activeItem = document.getElementById(item.dataset.id);
      item.classList.add('active');
      activeItem.style.maxHeight = activeItem.scrollHeight + 'px';
      activeItem.classList.add('active');
    });
  });
}

const removeActiveClass = () => {
  categoryItems.forEach(item => {
    item.classList.remove('active');
  });
  worksLists.forEach(item => {
    item.style.maxHeight = 0;
    item.classList.remove('active');
  });
  ratingsTables.forEach(item => {
    item.style.maxHeight = 0;
    item.classList.remove('active');
  });
}
