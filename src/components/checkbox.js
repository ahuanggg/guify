var EventEmitter = require('wolfy87-eventemitter');
let css = require('dom-css');

import styles from '../scss/components/checkbox.scss';

export default class Checkbox extends EventEmitter {
    constructor (root, opts, theme, uuid) {
        super();

        var container = require('./partials/container')(root, opts.label)
        require('./partials/label')(container, opts.label, theme)

        this.input = container.appendChild(document.createElement('input'))
        this.input.id = 'checkbox-' + opts.label + uuid
        this.input.type = 'checkbox'
        this.input.checked = opts.initial
        this.input.className = 'guify-checkbox'

        var label = container.appendChild(document.createElement('label'))
        label.htmlFor = 'checkbox-' + opts.label + uuid
        label.className = 'guify-checkbox'

        setTimeout(() => {
            this.emit('initialized', this.input.checked)
        })

        this.input.onchange = (data) => {
            this.emit('input', data.target.checked)
        }
    }

    SetValue(value) {
        this.input.checked = value;
    }

    GetValue() {
        return this.input.checked;
    }
}
