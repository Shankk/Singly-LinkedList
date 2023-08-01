const LinkedList = require('./LinkedList')

const ll = new LinkedList()

ll.prepend(15)
ll.append(30)
ll.insertAtIndex(1,50)

ll.toString()
console.log(ll)