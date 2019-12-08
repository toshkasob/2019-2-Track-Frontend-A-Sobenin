import { isNull } from 'util'

/* eslint no-underscore-dangle:
["error", { "allow": ["_shadowRoot", "_onKeyPress", "_onSubmit"] }]
*/

const keyArrayMessages = 'chatInLocalStorage'

// function saveMessageInLocalStorage(messageObj) {
//   // let chatHistory = localStorage.getItem(keyArrayMessages); // без JSON

//   let chatHistory = JSON.parse(localStorage.getItem(keyArrayMessages))
//   if (chatHistory === null) {
//     chatHistory = []
//   }
//   chatHistory.push(messageObj)
//   localStorage.setItem(keyArrayMessages, JSON.stringify(chatHistory))
// }

const template = document.createElement('template')
template.innerHTML = `
    <style>
        form-input {
            width: 100%;
            height: 6vh;
            border: 0;
            display: flex;
            box-sizing: border-box;
        }
        .chat {
            background: #eeeeeef;
            height: 85vh;
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
            animation-name: slide-owner-message;
            animation-duration: 0.3s;

        }
        .opponent_chat-box {            
          background: #ecbdec;
          width: auto;
          padding: 1%;
          margin: 1%;
          max-width: 75%;
          min-width: 25%;
          border-radius: 15px;
          display: inline-flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          align-self: flex-start;
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
        @keyframes slide-owner-message {
          0%   {opacity: 0; margin-right: 10%; margin-left: 10%;}
          100% {opacity: 1; margin-right:  0%; margin-left:  0%;}
        }
    </style>
    <form>
        <div class="chat"></div>
    </form>
`

class MessageForm extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))
    this.$form = this._shadowRoot.querySelector('form')
    // this.$input = this._shadowRoot.querySelector('form-input')
    this.$form.appendChild(document.createElement('form-input'))
    this.$input = this.$form.querySelector('form-input')
    this.$input.setAttribute('name', 'message-text')
    this.$input.setAttribute('placeholder', 'Сообщение')
    this.$message = this._shadowRoot.querySelector('.chat')

    this.$idChat = 0
    this.$keyArrayMessages = 'chatsArray'
    // this.chatRender()
    // this.saveMessageInLocalStorage = saveMessageInLocalStorage.bind(this)

    this.$form.addEventListener('submit', this._onSubmit.bind(this))
    this.$form.addEventListener('keypress', this._onKeyPress.bind(this))
  }

  _onSubmit(event) {
    event.preventDefault()
    if (this.$input.value.length > 0) {
      const messageObj = {}
      messageObj.text = this.$input.value
      messageObj.author = 'owner'
      messageObj.time = new Date()
      this.$input.value = ''
      this.addMessage(messageObj)
      this.saveMessageInLocalStorage(messageObj)
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
    minutes = minutes < 10 ? `0${minutes}` : minutes

    $messageText.innerHTML = messageObj.text
    $messageAuthor.innerHTML = messageObj.author
    $messageTime.innerHTML = `${hours}:${minutes}`

    $messageContainer.appendChild($messageAuthor)
    $messageContainer.appendChild($messageText)
    $messageContainer.appendChild($messageTime)
    this.$message.appendChild($messageContainer)
    this.$message.scrollTop = 9999
  }

  saveMessageInLocalStorage(messageObj) {
    // let chatHistory = localStorage.getItem(keyArrayMessages); // без JSON

    let chatHistory = JSON.parse(localStorage.getItem(this.$keyArrayMessages))

    if (chatHistory === null) {
      chatHistory = []
    }
    chatHistory[this.$idChat].messages.push(messageObj)
    localStorage.setItem(this.$keyArrayMessages, JSON.stringify(chatHistory))
  }

  chatRender() {
    const chatHistory = JSON.parse(localStorage.getItem(this.$keyArrayMessages))
    if (chatHistory === null) {
      return
    }
    const chatObj = chatHistory[this.$idChat]
    for (let iterCellStorage = 0; iterCellStorage < chatObj.messages.length; iterCellStorage += 1) {
      this.addMessage(chatObj.messages[iterCellStorage])
    }
  }
}

customElements.define('message-form', MessageForm)
