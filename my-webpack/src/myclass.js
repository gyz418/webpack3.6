function Person (name, age) {
  this.name = name
  this.age = age
}

Person.prototype.say1 = function () {
  console.log('hahaha')
}
Person.info = 'info1'
let p1 = new Person('haha', 20)
console.log(p1)
p1.say1()
console.log(Person.info)

class Per {
  // 构造器 如果没有显式定义构造器，则类内部有默认的构造器
  // 类似 function Person(){}
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  say () {    // 实例方法
    console.log('nanana')
  }

  static info = 'myinfo'   // 静态属性
  static sayHello () {       // 静态方法
    console.log('static fn')
  }
}

let p2 = new Per('hehe', 30)
console.log(p2)
p2.say()
console.log(Per.info)
Per.sayHello()