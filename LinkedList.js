class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    head() {
        return this.head
    }

    tail() {
        return this.getByIndex(this.length - 1)
    }

    size() {
        return this.length
    }

    getByIndex(index) {
        if (index < 0 || index >= this.length) return null

        let current = this.head
        for(let i = 0; i < index; i++) {
            current = current.getNext()
        }

        return current
    }

    pop() {
        if(this.getByIndex(this.length - 2) == null) {
            this.head = null
            this.length--
        }
        else {
            let getTail = this.getByIndex(this.length - 2)
            getTail.next = null
            this.length--
        }
        
    }

    contains(value) {
        let current = this.head
        if(current.value == value) return console.log("True")

        for(let i = 0; i < this.length-1; i++) {
            current = current.getNext()
            if(current.value == value) return console.log("True")
        }

        return console.log("False")
    }

    find(value) {
        let current = this.head
        if(current.value == value) return console.log("index: " + 0 + " value: " + current.value)
        
        for(let i = 0; i < this.length-1; i++) {
            current = current.getNext()
            if(current.value == value) return console.log("index: " + (i+1) + " value: " + current.value)
        }
        return console.log("False/null")
    }

    append(value) {
        let getTail = this.tail()
        getTail.next = new Node(value, null)
        this.length++
    }

    prepend(value) {
        const newNode = new Node(value,this.head)
        this.head = newNode
        this.length++
    }
}

class Node {
    constructor(value = null, next = null) {
        this.value = value
        this.next = next
    }

    getValue() {
        return this.value
    }
    setValue(value) {
        this.value = value
    }
    getNext() {
        return this.next
    }
    setNext(value) {
        this.next = value
    }
}

module.exports = LinkedList