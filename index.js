// виполниться при откритии расширения , работает с расширением
const buttonClearHistoryRef = document.querySelector('[data-btn="clear"]')
const historyRootRef = document.querySelector('#historyList');


function handlerClearHistory(){
    localStorage.removeItem('zapyskator')
}

if(localStorage.getItem('zapyskator')) {
    let history = JSON.parse(localStorage.getItem('zapyskator')) 

   // alert(localStorage.getItem('zapyskator'))

   const mocupTemplate = createTemplateList(history);
   render(mocupTemplate);
}

function createTemplateList(arrItems) {
   let template = '';

   arrItems.forEach(({www, time}) => {
      const liNode = `<li class="history-item">
                      <span class="history-item_time">${time}</span>
                      <img class="history-link_site-icon" src="https://s2.googleusercontent.com/s2/favicons?domain_url=https://${www}">     
                      <span class="history-item_title">${www}</span>
                        <a href="https://${www}" target="_blank">
                           <img class="history-item_link-icon" src="./image/link-icon.png">
                        </a>
                    </li>`

                    template+= liNode;
   })
   return template
}

function render(template) {
   try {
        historyRootRef.insertAdjacentHTML('afterbegin', template)
   } catch (error) {
       console.log(error)
   }
}

if(buttonClearHistoryRef){
    buttonClearHistoryRef.addEventListener('click', handlerClearHistory)
}
