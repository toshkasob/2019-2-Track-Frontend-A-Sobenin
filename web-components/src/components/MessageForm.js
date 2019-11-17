import { isNull } from 'util'

/* eslint no-underscore-dangle:
["error", { "allow": ["_shadowRoot", "_onKeyPress", "_onSubmit"] }]
*/

const keyArrayMessages = 'chatInLocalStorage'

function saveMessageInLocalStorage(messageObj) {
  // let chatHistory = localStorage.getItem(keyArrayMessages); // без JSON

  let chatHistory = JSON.parse(localStorage.getItem(keyArrayMessages))
  if (chatHistory === null) {
    chatHistory = []
  }
  chatHistory.push(messageObj)
  localStorage.setItem(keyArrayMessages, JSON.stringify(chatHistory))
}

const template = document.createElement('template')
template.innerHTML = `
    <style>
        form-input {
            width: 100%;
            height: 10vh;
            border: 0;
            display: flex;
            box-sizing: border-box;
        }
        .chat-header {
            background: purple;
            width: 100%;
            height: 8vh;
            top: 0px;
            position: fixed;
            padding: 1vh;
            overflow: hidden;
            text-align: center;
            color: white;
            font-size: 150%;
            z-index: 55;
        }

        .chat {
            background: #eeeeeef;
            height: calc(90vh - 60px);
            display: flex;
            flex-direction: column;
            align-item: flex-end;
            padding: 0vh 1vw 0vh 1vw;
            margin: 0vh 3vw 0vh 3vw;
            overflow-y: scroll;
        }
        .my_chat-box {            
            background: #ecbdec;
            width: auto;
            padding: 1%;
            margin: 1%;
            max-width: 75%;
            min-width: 25%;
            border-radius: 15px;
            display: inline-flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            align-self: flex-end;
            position: relative;
            top: 10vh;
            
        }
        .chat-text {
            text-align: right;
            font-size: 30px;
            font-family: Segoi UI;


        }
        .message-text {
            font-family: Segoi UI;
            color: black;
            font-size: 16px;
            padding: 5px;
            word-wrap: break-word;
            word-break: break-word;
            display: flex;
            align-self: flex-start;
            align-items: center;

        }
        .message-author {
            font-style: italic;
            font-weight: bolder;
            color: black;
            font-size: 10px;
            margin-right: 1%;
            display: flex;
            align-self: flex-end;
        }
        .message-time {
            font-style: italic;
            color: black;
            font-size: 10px;
            line-height: 1.5;
            margin-right: 1%;
            display: flex;
            align-self: flex-end;
        }

        span {
            text-align: right;
            font-size: 10px;
            font-style: italic;
        }

        input[type=submit] {
            visibility: collapse;
        }
    </style>
    <form>
        <div class="chat"></div>
        <form-input name="message-text" placeholder="Сообщение"></form-input>
    </form>
`
/*
        .chat-box {
            background: #ecbdec;
            border-radius: 15px;
            width: auto;
            padding: 15px;
            margin-bottom: 70px;
            max-width: 700px;
            min-width: 150px;

        }
        .chat-text {
            font-family: Segoi UI;
        }

        .chat-box {
            background: #ecbdec;
            width: auto;
            padding: 1%;
            margin-bottom: 2%;
            max-width: 95%;
            min-width: 5%;
            border-radius: 15px;
        }
        .chat-text {
            font-family: Segoi UI;
        }
        .chat {
            background: #dddddd
        }
*/
class MessageForm extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))
    this.$form = this._shadowRoot.querySelector('form')
    this.$input = this._shadowRoot.querySelector('form-input')
    this.$message = this._shadowRoot.querySelector('.chat')
    this.chatRender()
    this.saveMessageInLocalStorage = saveMessageInLocalStorage.bind(this)


    this.$form.addEventListener('submit', this._onSubmit.bind(this))
    this.$form.addEventListener('keypress', this._onKeyPress.bind(this))
  }

  _onSubmit(event) {
    event.preventDefault()
    // this.$message.innerText = this.$input.value;
    if (this.$input.value.length > 0) {
      this.messageObj = {}
      this.messageObj.text = this.$input.value
      this.messageObj.author = 'owner'
      this.messageObj.time = new Date()
      // let $time = new Date();
      // let $author = 'owner';
      // localStorage.setItem('ID_message=' + (localStorage.length).toString(),
      //                         ( (localStorage.length).toString() + ';'
      //                         + this.$input.value + ';'
      //                         + $author + ';'
      //                         + $time.toTimeString() + ';'
      //                         )
      //                     );
      // let $newContainer = document.createElement('div');
      // $newContainer.className = 'my_chat-box';
      // let $newMessage = document.createElement('p');
      // $newMessage.className = 'message-text';
      // let $authorDisplayed = document.createElement('span');
      // $authorDisplayed.className = 'message-author';
      // let $timeDisplayed = document.createElement('span');
      // $timeDisplayed.className = 'message-time'
      // $newMessage.innerHTML = this.$input.value;
      // $authorDisplayed.innerHTML = $author;
      // $timeDisplayed.innerHTML = $time.toTimeString();
      // $newContainer.appendChild($authorDisplayed);
      // $newContainer.appendChild($newMessage);
      // $newContainer.appendChild($timeDisplayed);
      // this.$message.appendChild($newContainer);
      this.$input.value = ''
      this.addMessage(this.messageObj)
      this.saveMessageInLocalStorage(this.messageObj)
    }
  }

  _onKeyPress(event) {
    if (event.keyCode == 13) {
      this.$form.dispatchEvent(new Event('submit'))
    }
  }

  addMessage(messageObj) {
    const $messageContainer = document.createElement('div')
    if (messageObj.author === 'owner') {
      $messageContainer.className = 'my_chat-box'
    } else {
      $messageContainer.className = 'opponent_chat-box'
    }
    const $messageText = document.createElement('div')
    $messageText.className = 'message-text'
    const $messageAuthor = document.createElement('div')
    $messageAuthor.className = 'message-author'
    const $messageTime = document.createElement('div')
    $messageTime.className = 'message-time'

    const date = new Date(messageObj.time)
    const hours = date.getHours()
    let minutes = date.getMinutes()
    minutes = (minutes < 10) ? (`0${minutes}`) : minutes

    $messageText.innerHTML = messageObj.text
    $messageAuthor.innerHTML = messageObj.author
    $messageTime.innerHTML = `${hours}:${minutes}`

    $messageContainer.appendChild($messageAuthor)
    $messageContainer.appendChild($messageText)
    $messageContainer.appendChild($messageTime)
    this.$message.appendChild($messageContainer)
    this.$message.scrollTop = 9999
  }

  

  chatRender() {
    const chatHistory = JSON.parse(localStorage.getItem(keyArrayMessages))
    if (chatHistory === null) {
      return
    }
    // let $stringsCellStorage = $chatHistory.split('\n'); // без JSON
    for (let iterCellStorage = 0; iterCellStorage < chatHistory.length; iterCellStorage+=1) {
      // let $cellStorage = $stringsCellStorage[iter_cell_storage].split(';');
      // let $message = {
      //     time: $cellStorage[0],
      //     author: $cellStorage[2],
      //     text: $cellStorage[3]
      // };
      // this.addMessage($message)
      this.addMessage(chatHistory[iterCellStorage])
    }

    // for (let cell_storage = 0; cell_storage < localStorage.length; cell_storage++) {
    //     let $containerFromStorage = document.createElement('div');
    //     $containerFromStorage.className = 'my_chat-box';
    //     let $messageFromStorage = document.createElement('p');
    //     $messageFromStorage.className = 'message-text';
    //     let $authorFromStorage = document.createElement('span');
    //     $authorFromStorage.className = 'message-author';
    //     let $timeFromStorage = document.createElement('span');
    //     $timeFromStorage.className = 'message-time';
    //     let $stringCellStorage = localStorage.getItem('ID_message=' + cell_storage);
    //     //like csv-file: ID;message;author;time;
    //     let $CellStorage = $stringCellStorage.split(';');
    //     //let $idFromStorage.innerHTML = $CellStorage[0];
    //     $messageFromStorage.innerHTML = $CellStorage[1];
    //     $authorFromStorage.innerHTML = $CellStorage[2];
    //     $timeFromStorage.innerHTML = $CellStorage[3];
    //     $containerFromStorage.appendChild($authorFromStorage);
    //     $containerFromStorage.appendChild($messageFromStorage);
    //     $containerFromStorage.appendChild($timeFromStorage);
    //     this.$message.appendChild($containerFromStorage);

    // }
  }
}


customElements.define('message-form', MessageForm)
