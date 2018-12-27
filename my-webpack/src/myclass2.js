/*
* 继承
*
* */
class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  say () {
    console.log('this is person:say')
  }

  static info () {
    console.log('this is person:static info')
  }
}

class Chinese extends Person {
  constructor (name, age, color, language) {
    super(name, age)  // 继承父类构造函数
    this.color = color
    this.language = language
  }
}

let p1 = new Person('haha', 22)
console.log(p1)

var c1 = new Chinese('小明', '30', 'yellow', '中文')
console.log(c1)
c1.say()
Chinese.info()

/*
* 面对对象：封装（方法和类就是封装了）、继承、多态
* 多态和接口、虚拟方法有关， 父类只有定义方法，多个子类继承后实现具体方法，就是多态
*
* */

class Animal {
  say () {}
}

class Cat extends Animal {
  say () {
    console.log('miaomiao')  // 子类继承并实现具体方法，即多态
  }
}

class Dog extends Animal {
  say () {
    console.log('dogdog')
  }
}