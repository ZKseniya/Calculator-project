import {addDataToHtml} from './createToOptions.js';

const formSelect = document.querySelector('.calculator__select');

// Получение данных в формате json
const getData = () => {
  fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log('Данные не подгрузились!')
      }
    }).then((data) => {

      addDataToHtml(data);

    }).catch(() => {
      console.log('Ошибка!')
    });
};

const sendData = () => {
  const form = document.querySelector('.calculator__form');

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch('mail.php',
      {
        method: 'POST',
        body: formData,
      },
    ).then((response) => {
      if (response.ok) {
        alert('Ok');
      } else {
        alert('Error1');
      }
    })
      .catch(() => {
        alert('Error2');
      });
  });
};

export {getData, sendData};
