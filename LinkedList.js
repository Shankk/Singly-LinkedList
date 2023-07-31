class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
        this.tail = null
    }
    
}

class Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

module.exports = LinkedList