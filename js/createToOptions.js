import {getConversionCurrency} from './calculator.js';

const formSelect = document.querySelector('.calculator__select');

// Обработка полученных данных
const addDataToHtml = (data) => {

  const dataList = data;
  const valuteList = Object.entries(dataList.Valute);
  const valuteDataList = [];

  // Создание элемета option в select
  const createOptionToSelect = (valuteItem) => {
    const option = document.createElement('option');
    option.textContent = valuteItem.Name;
    option.value = valuteItem.CharCode;

    if (option.value === 'USD') {
      option.selected = true;
    }

    formSelect.appendChild(option);
  }

  valuteList.forEach((valute) => {
    valuteDataList.push(valute[1]);
  });

  valuteDataList.forEach((valuteItem) => createOptionToSelect(valuteItem));

  getConversionCurrency(valuteDataList);
  };

export {addDataToHtml};
