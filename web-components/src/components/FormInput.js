/* eslint no-underscore-dangle:
["error", { "allow": ["_shadowRoot", "_onKeyPress", "_onSubmit"] }]
*/
const template = document.createElement('template')
template.innerHTML = `
    <style>
        input {
            border: 0;
            outline: none;
            width: calc(100% - 2px);
            height: 100%;
            font-size: 25px;
            align-item: center;
            border-top: 3px solid rgba(25, 25, 25, 0.32);
            padding-left: 5vw;
            padding-right: 5vw;
            box-sizing: border-box;
        }

        :host {
            display: inline-block;
            border: 1px solid rgba(25, 25, 25, 0.32);
        }
    </style>
    <input type="text">
`

class FormInput extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))

    this.$input = this._shadowRoot.querySelector('input')
  }

  static get observedAttributes() {
    return ['name', 'value', 'placeholder', 'disabled']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.$input.setAttribute(name, newValue)
  }

  set value(_newValue) {
    this.$input.value = _newValue
  }

  get value() {
    return this.$input.value
  }
}

customElements.define('form-input', FormInput)
