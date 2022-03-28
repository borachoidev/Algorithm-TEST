class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const newNode = new Node(val)
    if (this.head) {
      this.tail.next = newNode
    } else {
      this.head = newNode
    }
    this.tail = newNode
    this.length++
    return this
  }
  pop() {
    if (!this.head) return undefined

    let current = this.head
    let newTail = current
    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }
  shift() {
    if (!this.head) return undefined
    let head = this.head
    let newHead = head.next
    this.head = newHead
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return head
  }
  unshift(val) {
    const newHead = new Node(val)
    if (!this.head) {
      this.tail = newNode
    } else {
      newHead.next = this.head
    }
    this.head = newHead
    this.length++
    return this
  }

  get(index) {
    if (index >= this.length || index < 0)
      return `index is out of bounds for 0 with size ${this.length}`
    let counter = 0
    let target = this.head
    while (counter !== index) {
      target = target.next
      counter++
    }

    return target
  }

  set(index, val) {
    const foundNode = this.get(index)
    if (foundNode) {
      foundNode.val = val
      return true
    }
    return false
  }

  insert(index, val) {
    if (index > this.length || index < 0) return false
    if (index === 0) return !!this.unshift(val)
    if (index === this.length - 1) return !!this.push(val)
    const preNode = this.get(index - 1)
    const newNode = new Node(val)
    newNode.next = preNode.next
    preNode.next = newNode

    this.length++

    return true
  }

  remove(index) {
    if (index >= this.length || index < 0) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()
    const preNode = this.get(index - 1)
    const removed = preNode.next
    preNode.next = removed.next

    this.length--

    return deleted
  }

  reverse() {
    let node = this.head
    this.head = this.tail
    this.tail = node
    let next = null
    let prev = null
    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }

    return this
  }
}

const ll = new SinglyLinkedList()
ll.push('ONE')
ll.push('TWO')
ll.push('THREE')

/**
 * Time complexity :
 * insertion : O(1)
 * removal : O(1) or O(N)
 * searching : O(N)
 * access : O(N)
 */
