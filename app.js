//виполниться на каждой новой откритой вкладке работает только с вкладкой

let visitWeb = window.location.hostname;
let timeVisit = moment().format('LT');

const infoObj = {
    www: visitWeb,
    time: timeVisit
}

// если окно теряет фокус
function onBlur() { 
	 chrome.runtime.sendMessage(infoObj); // отправка сообщения на background.js
}

window.onblur = onBlur; 