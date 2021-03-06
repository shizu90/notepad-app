export default class Note {
    #id: string
    #title: string
    #content: string

    constructor(title: string, content: string, id: string = null) {
        this.#title = title
        this.#content = content
        this.#id = id
    }

    static empty(){
        return new Note('', '')
    }

    get id() {
        return this.#id
    }

    get title(){
        return this.#title
    }
    
    get content(){
        return this.#content
    }

    set title(title){
        this.#title = title
    }

    set content(content){
        this.#content = content
    }
}