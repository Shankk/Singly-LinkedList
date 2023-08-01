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
            current = current.next
        }

        return current
    }

    pop() {
        let getTail = this.getByIndex(this.length - 2)
        if(getTail == null) {
            this.head = null
            this.length--
        }
        else {
            getTail.next = null
            this.length--
        }
    }

    popFront() {
        this.head = this.head.next
        this.length--
    }

    contains(value) {
        let current = this.head
        if(current.value == value) return console.log("True")

        for(let i = 0; i < this.length-1; i++) {
            current = current.next
            if(current.value == value) return console.log("True")
        }

        return console.log("False")
    }

    find(value) {
        let current = this.head
        if(current.value == value) return console.log("index: " + 0 + " value: " + current.value)
        
        for(let i = 0; i < this.length-1; i++) {
            current = current.next
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

    toString() {
        let output = ''
        let current = this.head
        while(current) {
            output = `${output}${current.value} -> `
            current = current.next
        }
        console.log(`${output}null`)
    }

    insertAtIndex(index,value) {
        if(index === 0) return this.prepend(value)

        const prev = this.getByIndex(index - 1)
        if (prev == null) return null
        prev.next = new Node(value, prev.next)
        this.length++
    }

    removeAtIndex(index) {
        if(index === 0) return this.popFront()

        const prev = this.getByIndex(index - 1)
        if (prev == null) return null
        prev.next = prev.next.next

        this.length--
    }
}

class Node {
    constructor(value = null, next = null) {
        this.value = value
        this.next = next
    }
}

module.exports = LinkedList