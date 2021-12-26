
//отображения времени первого сообщения
function getTime() {
   let today = new Date();
   hours = today.getHours();
   minutes = today.getMinutes();
   day = today.getDay(1);

   if (hours < 10) {
      hours = "0" + hours;
   }

   if (minutes < 10) {
      minutes = "0" + minutes;
   }

   let time = hours + ":" + minutes;
   return time;

}

function showTime() {
   let time = getTime();
   let chatTimestamp = document.getElementById("chat-timestamp");
   chatTimestamp.append(`Сегодня в ${time}`);
}
showTime();

//------------------------------------------


const inputValue = document.getElementById("input");
let finalResult;
let reply;
const messagesContainer = document.getElementById("messages");

//отправить сообщение при нажатии кнопки Enter
   inputValue.addEventListener("keydown", (e) => {
     if (e.keyCode === 13) {
       let input = inputValue.value;
       inputValue.value = "";
       output(input);
     }
   });
 

 function output(input) {
  
   // привести все к нижнему регистру
 
   let text = input.toLowerCase();

   
 
   if (compare(userTexts, botReplies, text)) { 
     // поиск соответствия в `userTexts`
     finalResult = compare(userTexts, botReplies, text);
   } else {
     // если не находится подходящего ответа, бот выдает случайный ответ (альтернативный)
     finalResult = alternative[Math.floor(Math.random() * alternative.length)];
   }
 
   // обновить элемент DOM
   addToChat(input, finalResult);
 }


// функция для сравнения ответа бота на текст пользователя
function compare(userTexts, botReplies, text) { 
   for (let x = 0; x < userTexts.length; x++) {
     for (let y = 0; y < botReplies.length; y++){
       if (userTexts[x][y] == text) {
         let replies = botReplies[x];
         console.log(botReplies[x][y])
         reply = replies[Math.floor(Math.random() * replies.length)];
       }
     }
   }
   return reply;
 }


 function addToChat(input, finalResult) {
   let userDiv = document.createElement("div");
   userDiv.id = "my-message";
   userDiv.className = "my-text";
   
   userDiv.innerHTML =  
   `
      <div class="my-msg"> 
         ${input} 
      </div>
      <div class="my-avatar">
         <img src="images/my-img.png" alt="img">
      </div>
   `
   messagesContainer.appendChild(userDiv);

   //---------------------------------------------
 
   let botDiv = document.createElement("div");
       botDiv.id = "botStarterMessage";
       botDiv.className = "bot-text";

   let botAvatar = document.createElement("div");
       botAvatar.className = "bot-avatar";
       botDiv.appendChild(botAvatar);

   let botImg = document.createElement("img");
       botImg.src = "images/client-img.png";
       botAvatar.appendChild(botImg);

   let loadMsg = document.createElement("div");
       loadMsg.className = 'load-msg'
       botDiv.appendChild(loadMsg);
       loadMsg.innerHTML =    
       `
       <span></span>
       <span></span>
       <span></span>
       `

   messagesContainer.appendChild(botDiv);
   

   //// Сохраняйте сообщения самыми последними
   messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
 
   //// предварительная задержка, перед реальным сообщением
   setTimeout(() => {
   loadMsg.innerHTML = `${finalResult}`;
   }, 2000
   )
 
 }

 

//-----------------------------------Ответы-------------------------------------



const userTexts = [
   ["привет", "здравствуйте", "добрый день","hi"],

   ["хочу интересный факт", "что-то интересное пожалуйста", "следующий" , "еще"],

   ["прикольно,спасибо","прикольно", "спасибо"],
   ["нет", "в следующий раз", "не, потом"],
   

   ["пока"],
   
 ]


const botReplies = [
   ["Здравствуйте!","Добрый день!"],

   [
     "Самая крупная жемчужина в мире достигает 6 килограммов в весе",
     "Существует пробирка, диаметр которой, в 10000 раз меньше диаметра человеческого волоса",
     "Самый долгий полёт курицы продолжался 13 секунд.",
     "Самое высокое здание в Европе находится в Москве.",
     "Китайский язык является самым популярным в мире."
   ],
   [
     "Хотите еще?",
   ],

   ["Хорошо,тогда до следующего раз!"],

   ["Пока Пока","Давай,Бро!"],
 ]
   
const alternative = [
   "Попробуй снова",
   "Слушаю...",
   "Я не понимаю :/",
   "Я не понимаю вас",
   "Бро... :)"
 ]




