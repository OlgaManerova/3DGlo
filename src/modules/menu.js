const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    }

    menuBtn.addEventListener('click', handleMenu);


    menu.addEventListener('click', (e) => {
        if (e.target.classList.contains('close-btn') || e.target.nodeName == 'A') {
            handleMenu();
        }

        // console.log(e.target.classList.contains('active-menu'));
    });
}

export default menu