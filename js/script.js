const tabsMenu = document.querySelectorAll('.tabs-menu ul li');
const tabContent = document.querySelectorAll('.content-tab section');

if (tabsMenu.length && tabContent.length) {
  tabsMenu[0].classList.add('active-menu');
  tabContent[0].classList.add('active-tab');

  function active(index) {
    tabsMenu.forEach((menu) => {
      menu.classList.remove('active-menu');
    });
    tabsMenu[index].classList.add('active-menu');

    tabContent.forEach((section) => {
      section.classList.remove('active-tab');
    });
    tabContent[index].classList.add('active-tab');
  }

  tabsMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      active(index);
    })
  })
}
