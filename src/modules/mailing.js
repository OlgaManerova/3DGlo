const mailing = () => {
    const getData = () => {
        fetch('db.json').then(response => response.json()).then(data => {
            sendData(data);

        }).catch(error => {
            console.log('Ошибка');
        })
    };

    const sendData = (data) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
        })
    };

    getData();
}

export default mailing