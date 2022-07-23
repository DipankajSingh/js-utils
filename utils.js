'use strict'
export function $(selector = 'body') {
    const e = document.querySelectorAll(selector)
    if (e.length == 1) return e[0]
    if (e.length > 1) return e
}

export function GiveElement(tagName = 'div', classList = '', innerText = '') {
    const elm = document.createElement(tagName)
    if (classList != '') elm.classList = classList
    if (innerText != '') elm.innerText = innerText
    return elm
}

export function addKeyEvent(key = 'altKey+b', Callback) {
    addEventListener('keydown', (e) => {
        if (e.altKey && e.key == key) Callback()
    })
}

export function codeHTML(keyPairs = { '*b*': '<b>' }, onString = '') {
    const keys = Object.keys(keyPairs)
    const str = onString.split(' ')
    for (let i = 0; i < str.length; i++) {
        const elm = str[i];
        if (keys.includes(elm)) str[i] = keyPairs[elm]
    }
    return JSON.stringify(str.join(' '))
}
