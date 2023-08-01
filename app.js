const LinkedList = require('./LinkedList')

const ll = new LinkedList()

ll.prepend(15)
ll.prepend(20)
ll.append(50)
ll.append(30)

ll.contains(20)
ll.find(50)

console.log(ll)