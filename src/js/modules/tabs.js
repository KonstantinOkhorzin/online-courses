function tabs(tabSelector, contentSelector, activClassTabSelector, activeClassContentSelector) {
  
  const tabs = document.querySelectorAll(tabSelector);
  const tabsContent = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.remove(activeClassContentSelector);
    });

    tabs.forEach(item => {
      item.classList.remove(activClassTabSelector);
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add(activeClassContentSelector);
    tabs[i].classList.add(activClassTabSelector);
  }

  hideTabContent();
  showTabContent();

  tabs.forEach((item, i) => {
    item.addEventListener('click', () => {
      hideTabContent();
      showTabContent(i);
    });
  });
}

export default tabs;

