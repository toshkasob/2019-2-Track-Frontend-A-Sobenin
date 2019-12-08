/* eslint no-underscore-dangle:
["error", { "allow": ["_shadowRoot", "_onKeyPress", "_onSubmit"] }]
*/

const chatsArrayKey = 'chatsArray'

const template = document.createElement('template')
template.innerHTML = `
    <style>
        .chat-elem {
            display: inline-flex;
            min-height: 11vh;
            line-height: 11vh;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            user-select: none;
        }
        .chat-elem:hover {
            transition: 0.5s;
            background: lightblue;
        }
        .chat-elem:active {
            transition: 0.1s;
            background: #0004;
        }

        .opponent-face {
            color: #9C33FF;
            height: 100%;
            line-height: 11vh;
            align-self: center;
            margin-left: 1vh;
        }
        .opponent_img {
            fill: currentColor;
            height: 90%;
            padding-top: 5%;
        }
        .text-info {
            display: flex;
            justify-content: center;
            width: 100%;
            height: 100%;
            flex-direction: row;
            overflow: hidden;
            border-bottom: 1px solid #0002;
            margin-left: 2vh;
        }
        .message-preview {
            display: flex;
            height: 100%;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            padding-right: 2vh;
            overflow: hidden;
        }
        .opponent_name {
            line-height: 4vh;
            font-size: 3vh;
            font-weight: 550;
            overflow: hidden;
        }
        .lastmessage-text {
            line-height: 4vh;
            font-size: 2vh;
            color: #0009;
            overflow: hidden;
        }
        .lastmessage-info {
            display: flex;
            line-height: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            margin-right: 3vh;
        }
        .lastmessage-time {
            line-height: 4vh;
            font-size: 2vh;
    </style>
`

class ChatsList extends HTMLElement {
  constructor() {
    super()
    this.shadowRoot = this.attachShadow({ mode: 'open' })
    this.$chats_all = document.querySelector('.chats-all')
    this.chatsRender()

    this.$app_header = document.querySelector('app-header')
    // this.$message_form = document.querySelector('message-form')
    this.$chats_list = document.querySelector('chats-list')
    this.$chat_header = this.$app_header.$chat_header
    this.$chatslist_header = this.$app_header.$chatslist_header

    this.$newchat_button = this.$chats_all.querySelector('.create-chat')
    this.$newchat_button.addEventListener('click', this.onButtonChatCreateClicked.bind(this))

    // this.$test_button = this.shadowRoot.querySelector('.test')
    // this.$test_button.addEventListener('click', this.onTestClicked.bind(this))
  }

  onButtonChatCreateClicked() {
    const chatObj = {}
    chatObj.id = this.chatCount
    chatObj.opponent = 'Opponent Name'
    chatObj.messages = []
    this.chatToLocal(chatObj)
    this.addChat(chatObj)
    this.chatCount += 1
    this.scrollTop = 9999
  }

  // onTestClicked() {
  //     this.$chats_list.style.display = 'none'
  //     this.$message_form.style.display = 'flex'
  //     this.$chatslist_header.style.display = 'none'
  //     this.$chat_header.style.display = 'flex'
  // }

  addChat(chatObj) {
    const divFormatChatElem = document.createElement('div')
    const divFormatOpponentImg = document.createElement('div')
    const divFormatTextInfo = document.createElement('div')
    const divFormatMessagePreview = document.createElement('div')
    const spanFormatOpponentName = document.createElement('span')
    const spanFormatLastMessageText = document.createElement('span')
    const divFormatLastMessageInfo = document.createElement('div')
    const spanFormatLastMessageTime = document.createElement('span')

    divFormatChatElem.className = 'chat-elem'
    divFormatOpponentImg.className = 'opponent-face'
    divFormatTextInfo.className = 'text-info'
    divFormatMessagePreview.className = 'message-preview'
    spanFormatOpponentName.className = 'opponent_name'
    spanFormatLastMessageText.className = 'lastmessage-text'
    divFormatLastMessageInfo.className = 'lastmessage-info'
    spanFormatLastMessageTime.className = 'lastmessage-time'

    const opponentImg = `
        <svg version="1.1" class="opponent_img" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 55 55" width="7vh" height="7vh" fill="white" xml:space="preserve">
            <path d="M55,27.5C55,12.337,42.663,0,27.5,0S0,12.337,0,27.5c0,8.009,3.444,15.228,8.926,20.258l-0.026,0.023l0.892,0.752
                c0.058,0.049,0.121,0.089,0.179,0.137c0.474,0.393,0.965,0.766,1.465,1.127c0.162,0.117,0.324,0.234,0.489,0.348
                c0.534,0.368,1.082,0.717,1.642,1.048c0.122,0.072,0.245,0.142,0.368,0.212c0.613,0.349,1.239,0.678,1.88,0.98
                c0.047,0.022,0.095,0.042,0.142,0.064c2.089,0.971,4.319,1.684,6.651,2.105c0.061,0.011,0.122,0.022,0.184,0.033
                c0.724,0.125,1.456,0.225,2.197,0.292c0.09,0.008,0.18,0.013,0.271,0.021C25.998,54.961,26.744,55,27.5,55
                c0.749,0,1.488-0.039,2.222-0.098c0.093-0.008,0.186-0.013,0.279-0.021c0.735-0.067,1.461-0.164,2.178-0.287
                c0.062-0.011,0.125-0.022,0.187-0.034c2.297-0.412,4.495-1.109,6.557-2.055c0.076-0.035,0.153-0.068,0.229-0.104
                c0.617-0.29,1.22-0.603,1.811-0.936c0.147-0.083,0.293-0.167,0.439-0.253c0.538-0.317,1.067-0.648,1.581-1
                c0.185-0.126,0.366-0.259,0.549-0.391c0.439-0.316,0.87-0.642,1.289-0.983c0.093-0.075,0.193-0.14,0.284-0.217l0.915-0.764
                l-0.027-0.023C51.523,42.802,55,35.55,55,27.5z M2,27.5C2,13.439,13.439,2,27.5,2S53,13.439,53,27.5
                c0,7.577-3.325,14.389-8.589,19.063c-0.294-0.203-0.59-0.385-0.893-0.537l-8.467-4.233c-0.76-0.38-1.232-1.144-1.232-1.993v-2.957
                c0.196-0.242,0.403-0.516,0.617-0.817c1.096-1.548,1.975-3.27,2.616-5.123c1.267-0.602,2.085-1.864,2.085-3.289v-3.545
                c0-0.867-0.318-1.708-0.887-2.369v-4.667c0.052-0.52,0.236-3.448-1.883-5.864C34.524,9.065,31.541,8,27.5,8
                s-7.024,1.065-8.867,3.168c-2.119,2.416-1.935,5.346-1.883,5.864v4.667c-0.568,0.661-0.887,1.502-0.887,2.369v3.545
                c0,1.101,0.494,2.128,1.34,2.821c0.81,3.173,2.477,5.575,3.093,6.389v2.894c0,0.816-0.445,1.566-1.162,1.958l-7.907,4.313
                c-0.252,0.137-0.502,0.297-0.752,0.476C5.276,41.792,2,35.022,2,27.5z"/>
        </svg>`
    divFormatOpponentImg.innerHTML = opponentImg
    spanFormatOpponentName.innerText = chatObj.opponent

    if (chatObj.messages.length !== 0) {
      const lastmessageObj = chatObj.messages[chatObj.messages.length - 1]
      const date = new Date(lastmessageObj.time)
      let hours = date.getHours()
      let minutes = date.getMinutes()
      hours = hours < 10 ? `0${hours}` : hours
      minutes = minutes < 10 ? `0${minutes}` : minutes
      spanFormatLastMessageText.innerText = lastmessageObj.text
      spanFormatLastMessageTime.innerText = `${hours}:${minutes}`
    }
    divFormatMessagePreview.appendChild(spanFormatOpponentName)
    divFormatMessagePreview.appendChild(spanFormatLastMessageText)
    divFormatLastMessageInfo.appendChild(spanFormatLastMessageTime)
    divFormatTextInfo.appendChild(divFormatMessagePreview)
    divFormatTextInfo.appendChild(divFormatLastMessageInfo)
    divFormatChatElem.appendChild(divFormatOpponentImg)
    divFormatChatElem.appendChild(divFormatTextInfo)

    divFormatChatElem.addEventListener('click', this.openChat.bind(this))
    divFormatChatElem.idChat = chatObj.id
    divFormatChatElem.opponent_name = chatObj.opponent

    this.shadowRoot.appendChild(divFormatChatElem)
  }

  openChat(event) {
    // this.style.animationName = 'open-chat-animation'
    const chat = document.createElement('message-form')
    let { target } = event
    while (target.className !== 'chat-elem') {
      target = target.parentElement
      if (target === null) {
        return
      }
    }
    chat.$idChat = Number(target.idChat)
    chat.chatRender()
    chat.$chatsArrayKey = chatsArrayKey

    this.$chats_all.querySelector('.create-chat').style.display = 'none'
    this.$chats_list.style.display = 'none'
    this.$chats_all.appendChild(chat)
    chat.style.display = 'flex'
    // chat.$input.$input.focus()
    chat.$message.scrollTop = 9999
    this.$app_header.$opponent_name.innerText = target.opponent_name
    this.$chatslist_header.style.display = 'none'
    this.$chat_header.style.display = 'flex'
    this.$app_header.$message_form = chat
  }

  chatToLocal(chatObj) {
    this.storageChatArray = JSON.parse(localStorage.getItem(chatsArrayKey))
    if (this.storageChatArray === null) {
      this.storageChatArray = []
    }
    this.storageChatArray.push(chatObj)
    localStorage.setItem(chatsArrayKey, JSON.stringify(this.storageChatArray))
  }

  chatsRender() {
    while (this.shadowRoot.hasChildNodes()) {
      this.shadowRoot.removeChild(this.shadowRoot.firstChild)
    }
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    const storageChatArray = JSON.parse(localStorage.getItem(chatsArrayKey))
    this.chatCount = 0
    if (storageChatArray === null) {
      return
    }
    this.chatCount = storageChatArray.length
    for (let i = 0; i < this.chatCount; i += 1) {
      this.addChat(storageChatArray[i])
    }
  }
}

customElements.define('chats-list', ChatsList)
