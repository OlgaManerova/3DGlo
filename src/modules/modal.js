const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const modalContent = document.querySelector('.popup-content');
    const popupBtnClose = modal.querySelector('.popup-close');

    let idAnimation;
    let coord = 0;
    const maxCoord = 200;

    const windowInnerWidth = window.innerWidth

    modalContent.style.transform = `translateY(0)px)`;

    // function animate() {
    //     coord += 5;

    //     idAnimation = requestAnimationFrame(animate);

    //     if (coord < maxCoord && windowInnerWidth > 768) {
    //         modalContent.style.transform = `translateY(${coord}px)`;
    //     } else {
    //         cancelAnimationFrame(idAnimation);
    //     }
    // };

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
        })
    });

    //закрытие модального окна по клику вне попапа

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
        }
    });
}

export default modal