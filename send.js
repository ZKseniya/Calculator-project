function send(event, php){
  console.log("Отправка запроса");
  event.preventDefault ? event.preventDefault() : event.returnValue = false;
  var req = new XMLHttpRequest();
  req.open('POST', php, true);
  console.log(req);
  req.onload = function() {
    if (req.status >= 200 && req.status < 400) {
      var json = JSON.parse(this.response);
      
        if (json.message == 'success') {
          // Если сообщение отправлено
          onMessage('Сообщение отправлено!', '#269164');
        } else {
          // Если произошла ошибка
          onMessage('Ошибка. Сообщение не отправлено', '#b60d2f');
        }
      // Если не удалось связаться с php файлом
      } else {onMessage('Ошибка сервера. Номер: ' + req.status, '#b60d2f');}};

  // Если не удалось отправить запрос. Стоит блок на хостинге
  req.onerror = function() {onMessage('Ошибка отправки запроса', '#b60d2f');};
  req.send(new FormData(event.target));
  }

  const onMessage = (message, color) => {
    const alertContainer = document.createElement('div');
    alertContainer.style.zIndex = 100;
    alertContainer.style.position = 'absolute';
    alertContainer.style.left = 0;
    alertContainer.style.top = 0;
    alertContainer.style.right = 0;
    alertContainer.style.width = '60%';
    alertContainer.style.margin = '0 auto';
    alertContainer.style.padding = '10px 3px';
    alertContainer.style.fontSize = '25px';
    alertContainer.style.textAlign = 'center';
    alertContainer.style.backgroundColor = color;
    alertContainer.style.color = 'white';

    alertContainer.textContent = message;

    document.body.appendChild(alertContainer);

    const offMessage = () => {
      document.body.removeChild(alertContainer);
    };

    setTimeout(() => {
      offMessage();
    }, 5000);
  };
