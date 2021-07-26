const formSelect = document.querySelector('.calculator__select');
const inputRub = document.querySelector('#sum-rub');
const inputCurrency = document.querySelector('#sum-currency');

const Default = {
  Value : 1000,
  Currency : 'USD',
};

// Получения данных из полей и расчет
const getConversionCurrency = (valuteDataList) => {

  inputRub.value = Default.Value;

  // Функция расчета суммы в валюту
  const getCurrency = (currencyValue, rate) => {
    const conversionCurrency = (currencyValue / rate).toFixed(3);

    inputCurrency.value = conversionCurrency;
  };

   // Функция поиска курса валюты
  const searchRate = (optionValue) => {
    let rate;

    for(var i = 0; i < valuteDataList.length; i++) {

      if(valuteDataList[i].CharCode == optionValue) {
        rate = valuteDataList[i].Previous;
        break;
      }
    };

    return rate;
  }

  getCurrency(inputRub.value, searchRate(Default.Currency));

  // Обработка события изменений в Select
  formSelect.addEventListener('change', (evt) => {
    const optionValue = evt.target.value;

    getCurrency(inputRub.value, searchRate(optionValue));
  });

  // обработка ввода суммы
  inputRub.addEventListener('input', () => {
    const currencyValue = inputRub.value;

    getCurrency(currencyValue, searchRate(formSelect.value));
  });

};

export {getConversionCurrency};
