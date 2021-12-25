const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const modalContent = document.querySelector('.popup-content');
    const popupBtnClose = modal.querySelector('.popup-close');

    let idAnimation;
    let coord = 0;
    const maxCoord = 200;

    const windowInnerWidth = window.innerWidth
    console.log(windowInnerWidth);

    modalContent.style.transform = `translateY(0)px)`;

    function animate() {
        coord += 5;

        idAnimation = requestAnimationFrame(animate);

        if (coord < maxCoord && windowInnerWidth > 768) {
            modalContent.style.transform = `translateY(${coord}px)`;
        } else {
            cancelAnimationFrame(idAnimation);
        }
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            animate();
        })
    })

    popupBtnClose.addEventListener('click', () => {
        modal.style.display = '';
        modalContent.style.transform = `translateY(0px)`;
    })
}

export default modal