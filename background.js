// виполняеться в фоне после открития браузера имеет доступ в общий локалсторедж с скриптами в плагине

const visitArr = [];

// принимает сообщения с app.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
       
       let messageObj = request;
       visitArr.push(messageObj); //  заносим посещенний сайт в массив
       localStorage.setItem('zapyskator',JSON.stringify(visitArr))
    });
    
// при запуске плагина виполниться 
//  chrome.app.runtime.onLaunched.addListener(function() {
       
//  });