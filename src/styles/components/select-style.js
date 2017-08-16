const csjs = require('csjs-inject');

import common from '../common-style.js';

module.exports = csjs`

.guify-select-dropdown {
    display: inline-block;
    position: absolute;
    width: calc(100% - ${common.theme.sizing.labelWidth});
    padding-left: 1.5%;
    height: 20px;
    border: none;
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance:none;
    appearance: none;
    font-family: inherit;
    background-color: ${common.theme.colors.background2};
    color: ${common.theme.colors.text2};
    box-sizing: border-box !important;
    -moz-box-sizing: border-box !important;
    -webkit-box-sizing: border-box !important;

    &:focus {
        outline: none;
    }
    &::-moz-focus-inner {
        border: 0;
    }
}
.guify-select-dropdown:focus,
.guify-select-dropdown:hover {
    background-color: ${common.theme.colors.background2hover};
}
.guify-select-dropdown::-ms-expand {
    display:none;
}
.guify-select-triangle {
    content: ' ';
    border-right: 3px solid transparent;
    border-left: 3px solid transparent;
    line-height: 20px;
    position: absolute;
    right: 2.5%;
    z-index: 1;
}
.guify-select-triangle--down {
    top: 11px;
    border-top: 5px solid ${common.theme.colors.text2};
    border-bottom: 0px transparent;
}
.guify-select-triangle--up {
    top: 4px;
    border-bottom: 5px solid ${common.theme.colors.text2};
    border-top: 0px transparent;
}

`;
