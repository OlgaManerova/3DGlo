const validate = () => {
    const inputs = document.querySelectorAll('.validate-number');
    const inputText = document.querySelectorAll('input[placeholder="Ваше сообщение"]');
    const inputEmail = document.querySelectorAll('input[type=email]');
    const inputTel = document.querySelectorAll('input[type=tel]');

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/\D+/, '');
        })
    });

    inputText.forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[^А-Яа-я -]+/g, '');
        })
    });

    inputEmail.forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[^A-Z0-9-_~@.]+/gi, '');
            // input.value = input.value.replace(/[A-Z-_~]+\@[A-Z-_~]+\.[A-Z]+/gi, ''); //валидация email
        })
    });

    inputTel.forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[^0-9()-]+/g, '');
        })
    });
}

export default validate