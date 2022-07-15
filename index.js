'use strict';

// KONSTANTEN / VARIABLEN
const movies = [];
const people = [];
const elements = {};

// KLASSEN
class Movie {
    constructor({
        title = '',
        director = [],
        duration = 0,
        release = new Date().getFullYear()
    } = {}) {
        Object.assign(this, { title, director, duration, release });
        this.id = getNextID(movies);
    }

    get age() {
        return new Date().getFullYear() - this.release;
    }
}

class Person {
    constructor({
        vname = '',
        nname = ''
    } = {}) {
        Object.assign(this, { vname, nname });
        this.id = getNextID(people);
    }

    get fullName() {
        return `${this.vname} ${this.nname}`;
    }
}

// FUNKTIONEN
const getNextID = data => {
    let ids = data.map(el => el.id);
    let max = Math.max(...ids, 0);
    return max + 1;
}

const output = () => {
    // Für jeden Film ein neues DOM-Element erzeugen
    elements.main.innerHTML = '';

    movies.forEach(movie => {
        const container = dom.create({
            parent: elements.main,
            classes: ['container']
        })

        // Title
        dom.create({
            parent: container,
            content: movie.title,
            type: 'h3'
        })

        // Laufzeit
        components.infobox({
            parent: container,
            legend: 'Laufzeit',
            content: movie.duration + 'min'
        })

        // Erschienen
        components.infobox({
            parent: container,
            legend: 'Erschienen',
            content: movie.release
        })

        // Regie
        const tempRegie = movie.director
            .map(id => people.find(person => person.id == id))
            .map(person => person.fullName)
            .join(', ')

        // console.log(tempRegie);
        components.infobox({
            parent: container,
            legend: 'Regie',
            content: tempRegie
        })

    })
}

const domMapping = () => {
    elements.main = document.querySelector('main');
}

const createPeople = () => {
    people.push(new Person({
        vname: 'Lana',
        nname: 'Wachowski'
    }));
    people.push(new Person({
        vname: 'Lilly',
        nname: 'Schulz'
    }));
    people.push(new Person({
        vname: 'Tom',
        nname: 'Tykwer'
    }));
    people.push(new Person({
        vname: 'Ulli',
        nname: 'Lommel'
    }));
    people.push(new Person({
        vname: 'Denis',
        nname: 'Villeneuve'
    }));
}

const createMovies = () => {
    movies.push(new Movie({
        title: 'Matrix',
        director: [1, 2],
        duration: 136,
        release: 1999
    }));

    movies.push(new Movie({
        title: 'Cloud Atlas',
        director: [1, 2, 3],
        duration: 172,
        release: 2012
    }))

    movies.push(new Movie({
        title: 'Daniel der Zauberer',
        director: [4],
        duration: 81,
        release: 2006
    }))

    movies.push(new Movie({
        title: 'Dune',
        director: [5],
        duration: 155,
        release: 2021
    }))

}

const init = () => {
    domMapping();
    createPeople();
    createMovies();
    output();
}

// INIT
init();