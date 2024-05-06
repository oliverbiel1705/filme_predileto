document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i =0; i< buttons.length; i++) {
        buttons[i].addEventListener('click', function(butt) {
            const targetTab = butt.target.dataset.tabButton.toLowerCase();
            const tab = document.querySelector(`[data-tab-id="${targetTab}"]`);
            hideTabs();
            tab.classList.add('characters__div--is-active');
            changeButton();
            butt.target.classList.add('characters__tabs__button--is-active');
        })
    }
})

function hideTabs() {
    const tabsContainers = document.querySelectorAll('[data-tab-id]');

    for (let i=0; i< tabsContainers.length; i++) {
        tabsContainers[i].classList.remove('characters__div--is-active');
    }
}

function changeButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i=0; i< buttons.length; i++) {
        buttons[i].classList.remove('characters__tabs__button--is-active');
    }
}