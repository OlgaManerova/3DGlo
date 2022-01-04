import { animate } from './helpers'

const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const modalContent = document.querySelector('.popup-content');
    const popupBtnClose = modal.querySelector('.popup-close');

    modalContent.style.display = 'block';


    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            animate({
                duration: 1000,
                timing(timeFraction) {
                  return timeFraction;
                },
                draw(progress) {
                    modal.style.display = 'block';
                    modalContent.style.opacity = progress;
                }
            });
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