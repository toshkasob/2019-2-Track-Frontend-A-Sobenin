const template = document.createElement('template');
template.innerHTML = `
    <style>
        form-input {
            width: 100%;
        }
        .chat-header {
            background: purple;
            width: 100%;
            height: 7%;
            top: 0px;
            position: fixed;
            padding: 30px;
            overflow: hidden;
            text-align: center;
            color: white;
            font-size: 200%;
        }

        .result {
            background: #dddddd;         
            display: flex;
            flex-direction: column;
            align-item: flex-end;
            justify-content: center;
            padding: 10px;
            margin: 7%;
            overflow: hidden;
        }
        .chat-box {            
            background: #ecbdec;
            width: auto;
            padding: 1%;
            margin-bottom: 2%;
            max-width: 95%;
            min-width: 5%;
            border-radius: 15px;
            float: right;
            
        }
        .chat-text {
            text-align: right;
            font-size: 30px;
            font-family: Segoi UI;


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
        <div class="chat-header">Дженифер</div>
        <div class="result"></div>
        <form-input name="message-text" placeholder="Сообщение"></form-input>
    </form>
`;
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
*/
class MessageForm extends HTMLElement {
    constructor () {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.$form = this._shadowRoot.querySelector('form');
        this.$input = this._shadowRoot.querySelector('form-input');
        this.$message = this._shadowRoot.querySelector('.result');

        this.$form.addEventListener('submit', this._onSubmit.bind(this));
        this.$form.addEventListener('keypress', this._onKeyPress.bind(this));

        for (let cell_storage = 0; cell_storage < localStorage.length; cell_storage++) {
            let $containerFromStorage = document.createElement('div');
            $containerFromStorage.className = 'chat-box';
            let $messageFromStorage = document.createElement('p');
            $messageFromStorage.className = 'chat-text';
            let $authorFromStorage = document.createElement('span');
            $authorFromStorage.className = 'chat-author';
            let $timeFromStorage = document.createElement('span');
            $timeFromStorage.className = 'chat-time';
            let $stringCellStorage = localStorage.getItem('ID_message=' + cell_storage);
            //like csv-file: ID;message;author;time;
            let $CellStorage = $stringCellStorage.split(';');
            //let $idFromStorage.innerHTML = $CellStorage[0];
            $messageFromStorage.innerHTML = $CellStorage[1];
            $authorFromStorage.innerHTML = $CellStorage[2];
            $timeFromStorage.innerHTML = $CellStorage[3];
            $containerFromStorage.appendChild($authorFromStorage);
            $containerFromStorage.appendChild($messageFromStorage);
            $containerFromStorage.appendChild($timeFromStorage);
            this.$message.appendChild($containerFromStorage);

        }
    }

    _onSubmit (event) {
        event.preventDefault();
        //this.$message.innerText = this.$input.value;
        if (this.$input.value.length > 0) {
            let $time = new Date();
            let $author = 'owner';
            localStorage.setItem('ID_message=' + (localStorage.length).toString(),
                                    ( (localStorage.length).toString() + ';'
                                    + this.$input.value + ';'
                                    + $author + ';'
                                    + $time.toTimeString() + ';'
                                    )
                                );
            let $newContainer = document.createElement('div');
            $newContainer.className = 'chat-box';
            let $newMessage = document.createElement('p');
            $newMessage.className = 'chat-text';
            let $authorDisplayed = document.createElement('span');
            $authorDisplayed.className = 'chat-author';
            let $timeDisplayed = document.createElement('span');
            $timeDisplayed.className = 'chat-time'
            $newMessage.innerHTML = this.$input.value;
            $authorDisplayed.innerHTML = $author;
            $timeDisplayed.innerHTML = $time.toTimeString();
            $newContainer.appendChild($authorDisplayed);
            $newContainer.appendChild($newMessage);
            $newContainer.appendChild($timeDisplayed);
            this.$message.appendChild($newContainer);
            this.$input.value = '';
        }
    }

    _onKeyPress (event) {
        if (event.keyCode == 13) {
            this.$form.dispatchEvent(new Event('submit'));
        }
    }
}

customElements.define('message-form', MessageForm);
