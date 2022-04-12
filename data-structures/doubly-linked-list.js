class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
    }
    this.tail = newNode
    this.length++

    return this
  }

  pop() {
    if (this.length === 0) return undefined
    const lastNode = this.tail
    if (this.length === 1) {
      this.tail = null
      this.head = null
    } else {
      this.tail = lastNode.prev
      this.tail.next = null
      lastNode.prev = null
    }
    this.length--
    return lastNode
  }

  shift() {
    if (this.length === 0) return undefined
    const firstNode = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = firstNode.next
      this.head.prev = null
      firstNode.next = null
    }
    this.length--
    return firstNode
  }

  unshift(val) {
    const newHead = new Node(val)
    if (this.length === 0) {
      this.tail = newHead
    } else {
      this.head.prev = newHead
      newHead.next = this.head
    }
    this.head = newHead
    this.length++

    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined

    if (index <= this.length / 2) {
      let count = 0
      let current = this.head
      while (count !== index) {
        current = current.next
        count++
      }
      return current
    } else {
      let count = this.length - 1
      let current = this.tail
      while (count !== index) {
        current = current.prev
        count--
      }
      return current
    }
  }
}

const dll = new DoublyLinkedList()
dll.push(1)
dll.push(2)
dll.push(3)
dll.unshift(0)
