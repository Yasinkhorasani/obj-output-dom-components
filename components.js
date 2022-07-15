'use strict';

const components = {
    // Eine Komponente ist eine Methode, die einen HTML-Teilbaum anlegt
    infobox({
        parent=false,
        content='',
        legend=''
    } = {}) {
        const container = dom.create({
            parent,
            classes:['infobox']
        })

        dom.create({
            type: 'span',
            parent: container,
            content: legend,
            classes: ['legend']
        })

        dom.create({
            type: 'span',
            parent: container,
            content,
            classes: ['text']
        })
    }
}